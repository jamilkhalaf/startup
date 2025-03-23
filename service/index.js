const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const DB = require('./database.js');
const app = express();
const { peerProxy } = require('./peerProxy.js');


const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse cookies for tracking auth tokens
app.use(cookieParser());

// Serve static files from the public directory
app.use(express.static('public'));

// API router for service endpoints
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Register a new user and generate auth token
apiRouter.post('/auth/register', async (req, res) => {
  const existingUser = await DB.getUser(req.body.email);
  if (existingUser) {
    return res.status(409).send({ msg: 'User already exists' });
  }

  const user = await createUser(req.body.email, req.body.password);
  setAuthCookie(res, user.token);

  res.send({ email: user.email });
});

// Login and authenticate a user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (!user) {
    return res.status(404).send({ msg: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
  if (isPasswordValid) {
    user.token = uuid.v4();
    await DB.updateUser(user);
    setAuthCookie(res, user.token);
    return res.send({ email: user.email });
  }

  res.status(401).send({ msg: 'Invalid credentials' });
});

// Logout and clear auth token
apiRouter.delete('/auth/logout', async (req, res) => {
  const token = req.cookies[authCookieName];
  const user = await DB.getUserByToken(token);
  if (user) {
    user.token = null;
    await DB.updateUser(user);
  }

  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Get the current authenticated user's data


// Middleware to ensure the user is authenticated
const verifyAuth = async (req, res, next) => {
  const user = await DB.getUserByToken(req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

apiRouter.get('/user/me', verifyAuth, async (req, res) => {
  const token = req.cookies[authCookieName];
  const user = await DB.getUserByToken(token);
  if (user) {
    res.send({ email: user.email });
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
});

apiRouter.get('/leaderboard', verifyAuth, async (req, res) => {
  try {
      const scores = await DB.getHighScores();  // Fetch the top 10 scores
      res.send(scores);  // Send the leaderboard as a response
  } catch (error) {
      console.error('Error fetching leaderboard:', error);
      res.status(500).send({ msg: 'Error fetching leaderboard' });
  }
});

// Submit a score and update leaderboard
apiRouter.post('/score', verifyAuth, async (req, res) => {
  const newScore = req.body;
  console.log('Received score:', newScore);

  // Ensure valid data (check for player name and time)
  if (!newScore.playerName || typeof newScore.time !== 'number') {
      return res.status(400).send({ msg: 'Invalid data' });
  }

  try {
      // Add the new score to the database
      await DB.addTime(newScore);

      // Fetch the updated leaderboard and send it back as a response
      const leaderboard = await DB.getHighScores();
      res.send(leaderboard);
  } catch (error) {
      console.error('Error submitting score:', error);
      res.status(500).send({ msg: 'Error submitting score' });
  }
});



// Default error handler
app.use((err, req, res, next) => {
  res.status(500).send({ type: err.name, message: err.message });
});

// Default route to serve index.html
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Create a new user in the database
async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };

  await DB.addUser(user);
  return user;
}

// Set auth cookie in the response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,   // Set true for production to enable secure cookie
    httpOnly: true,
    sameSite: 'strict',
  });
}


const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);