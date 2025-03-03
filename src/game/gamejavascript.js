// src/game.js
export function initializeGame(playerName) {
    const cardArray = [
      { name: 'image1', img: 'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/16/USAT/75705761007-8932-medium-friesuuidpngcoredownload.png?crop=1998,1499,x0,y347' },
      { name: 'image2', img: 'https://www.thespruceeats.com/thmb/UpVWAcHnFEe_KvQpYsR1a7U-WY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg' },
      { name: 'image3', img: 'https://www.epicuricloud.com/wp-content/uploads/2021/05/Vanilla-Ice-Cream-Cone-up-close-scaled.jpeg' },
      { name: 'image4', img: 'https://hips.hearstapps.com/hmg-prod/images/chocolate-cake-index-64b83bce2df26.jpg?crop=0.6668359143606668xw:1xh;center,top&resize=1200:*' },
      { name: 'image5', img: 'https://s7d6.scene7.com/is/image/bjs/259873' },
      { name: 'image6', img: 'https://images.cdn.retail.brookshires.com/detail/3b5dcbe9-8f12-4286-8149-8bb7888ed3be.jpeg' },
      { name: 'image7', img: 'https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/r_8/c_limit,w_3840/f_auto/q_auto/v1/dxp-images/kmc/products/00021000017218-original-mac--cheese-macaroni-and-cheese-dinner-with-whole-grain-pasta/marketing-view-color-front_content-hub-2506568_f397263c2f7218a169f10fe51cb15760?_a=BAVAfVDW0' },
      { name: 'image8', img: 'https://www.kroger.com/product/images/large/front/0003800000127' },
      { name: 'image1', img: 'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/16/USAT/75705761007-8932-medium-friesuuidpngcoredownload.png?crop=1998,1499,x0,y347' },
      { name: 'image2', img: 'https://www.thespruceeats.com/thmb/UpVWAcHnFEe_KvQpYsR1a7U-WY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg' },
      { name: 'image3', img: 'https://www.epicuricloud.com/wp-content/uploads/2021/05/Vanilla-Ice-Cream-Cone-up-close-scaled.jpeg' },
      { name: 'image4', img: 'https://hips.hearstapps.com/hmg-prod/images/chocolate-cake-index-64b83bce2df26.jpg?crop=0.6668359143606668xw:1xh;center,top&resize=1200:*' },
      { name: 'image5', img: 'https://s7d6.scene7.com/is/image/bjs/259873' },
      { name: 'image6', img: 'https://images.cdn.retail.brookshires.com/detail/3b5dcbe9-8f12-4286-8149-8bb7888ed3be.jpeg' },
      { name: 'image7', img: 'https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/r_8/c_limit,w_3840/f_auto/q_auto/v1/dxp-images/kmc/products/00021000017218-original-mac--cheese-macaroni-and-cheese-dinner-with-whole-grain-pasta/marketing-view-color-front_content-hub-2506568_f397263c2f7218a169f10fe51cb15760?_a=BAVAfVDW0' },
      { name: 'image8', img: 'https://www.kroger.com/product/images/large/front/0003800000127' },
    ];
  
    cardArray.sort(() => 0.5 - Math.random());
  
    const grid = document.querySelector('.grid');
    
    const resultDisplay = document.querySelector('#result');
    const timeDisplay = document.querySelector('#time');

  
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let startTime;
    let timerInterval;
  
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTgLUsSYpPBIYSdUP9a3L1Ve0v_Ud-eXbxw&s');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
      }
    }
  
    function flipCard() {
      const card = this;
      const cardId = card.getAttribute('data-id');
      if (!startTime) {
        startTimer(); // Start the timer only on the first click
      }
      if (cardsChosenId.length < 2 && !cardsChosenId.includes(cardId) && !cardsWon.includes(cardId)) {
        card.setAttribute('src', cardArray[cardId].img);
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        const flipSound = new Audio('/flipCard.mp3');
        flipSound.play();
        if (cardsChosen.length === 2) {
          setTimeout(checkMatch, 500);
        }
      }
    }
  
    function checkMatch() {
      const cards = document.querySelectorAll('img');
      const [firstCardId, secondCardId] = cardsChosenId;
      if (cardsChosen[0] === cardsChosen[1]) {
        const matchSound = new Audio('/matchSound.wav');
        matchSound.play();
        cards[firstCardId].setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ziXbSrZqhY82T31tWMqsPZBHyxoNie6B4w&s');
        cards[secondCardId].setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ziXbSrZqhY82T31tWMqsPZBHyxoNie6B4w&s');
        cardsWon.push(firstCardId, secondCardId);
        resultDisplay.textContent = cardsWon.length / 2;
        if (cardsWon.length / 2 === 8) {
          clearInterval(timerInterval); // Stop time
          const victorySound = new Audio('/victory.mp3');
          victorySound.play();
          alert("You won! See how you did on the leaderboard section.");
          endGame(playerName, Math.floor((Date.now() - startTime) / 1000));
        }
      } else {
        cards[firstCardId].setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTgLUsSYpPBIYSdUP9a3L1Ve0v_Ud-eXbxw&s');
        cards[secondCardId].setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTgLUsSYpPBIYSdUP9a3L1Ve0v_Ud-eXbxw&s');
      }
      cardsChosen = [];
      cardsChosenId = [];
    }
  
    function startTimer() {
      startTime = Date.now();
      timerInterval = setInterval(() => {
        const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
        timeDisplay.textContent = timeElapsed + 's';
        sendWebSocketUpdate(playerName, resultDisplay.textContent, timeElapsed);
      }, 1000);
    }
  

    function sendWebSocketUpdate(playerName, score, time) {
      // Mock WebSocket message
      const message = `${playerName}: Score = ${score}, Time = ${time}s`;
      document.querySelector('#websocket-placeholder').textContent = message;
    }


    function restartGame() {
      startTime = null; 
      clearInterval(timerInterval);
      cardsWon = [];
      resultDisplay.textContent = 0;
      timeDisplay.textContent = '0s';
      cardArray.sort(() => 0.5 - Math.random());
      grid.innerHTML = '';
      createBoard();
    }

    function endGame(playerName, time) {
      fetch('/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerName, time }),
      })
        .then(() => updateLeaderboard())
        .catch(error => console.error('Error submitting score:', error));
    }
    
    function updateLeaderboard() {
      fetch('/api/leaderboard')
        .then(response => response.json())
        .then(data => {
          const leaderboardTable = document.querySelector('#leaderboard');
          leaderboardTable.innerHTML = '';
    
          data.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${index + 1}</td><td>${entry.playerName}</td><td>${entry.time}s</td>`;
            leaderboardTable.appendChild(row);
          });
        })
        .catch(error => console.error('Error fetching leaderboard:', error));
    }

    
    
  
    document.querySelector('#restartButton').addEventListener('click', restartGame);
  
    createBoard();
    
  }
  