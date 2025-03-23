
//mongo db connection
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('startup');

const userCollection = db.collection('user');
const timeCollection = db.collection('time');  // Renamed "score" to "time"



// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);

  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

// Function to add a time record (score)
async function addTime(timeData) {
    const { playerName, time } = timeData;
    
    // Check if the user already exists in the leaderboard
    const existingEntry = await timeCollection.findOne({ playerName });

    if (existingEntry) {
        // If the new time is better (lower), update the existing record
        if (time < existingEntry.time) {
            await timeCollection.updateOne(
                { playerName },
                { $set: { time, timestamp: new Date() } }
            );
        }
    } else {
        // Insert new player entry if they are not in the leaderboard
        await timeCollection.insertOne({ playerName, time, timestamp: new Date() });
    }

    // Fetch the top 10 leaderboard, sorted by time (ascending)
    const topTimes = await getHighScores();

    // If more than 10 unique users exist, remove the worst (highest) time entry
    if (topTimes.length > 10) {
        const worstTime = topTimes[topTimes.length - 1]; // Last entry in sorted array
        await timeCollection.deleteOne({ _id: worstTime._id });
    }
}



// Get the top 10 leaderboard
async function getHighScores() {
    // Sort by time in ascending order (lowest time is best)
    const options = {
        sort: { time: 1 },  // Sort by time in ascending order
        limit: 10,          // Only return the top 10 entries
    };
    const cursor = timeCollection.find({}, options);  // No need for a query filter
    return await cursor.toArray();  // Return the top 10 records as an array
}


// Export all functions
module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addTime,
    getHighScores,
  };
