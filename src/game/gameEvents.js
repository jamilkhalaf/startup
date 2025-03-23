const GameEvent = {
  System: 'system',
  End: 'gameEnd',
  Start: 'gameStart',
  Chat: 'chat',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onopen = (event) => {
      this.receiveEvent(new EventMessage('Startup', GameEvent.System, { msg: 'connected' }));
    };
    this.socket.onclose = (event) => {
      this.receiveEvent(new EventMessage('Startup', GameEvent.System, { msg: 'disconnected' }));
    };
    this.socket.onmessage = async (msg) => {
      try {
          const event = JSON.parse(await msg.data.text());
          this.receiveEvent(event);
      } catch (error) {
          console.error("Error parsing WebSocket message:", error);
      }
  };
  
  // WebSocket error event handler
  this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);
  };
  }

  broadcastEvent(from, type, value) {
    if (this.socket.readyState === WebSocket.OPEN) {
      const event = new EventMessage(from, type, value);
      this.socket.send(JSON.stringify(event));
  } else {
      console.error("WebSocket is not open. Event not broadcasted.");
  }
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    console.log('Received event:', event);

    this.events.push(event);

    this.events.forEach((e) => {
      this.handlers.forEach((handler) => {
        handler(e);
      });
    });
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
