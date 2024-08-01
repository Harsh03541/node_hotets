const mongoose = require('mongoose');

// define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotets'  // Replace 'mydatabase with your database name

// set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} )

// Get the default connection
// Mongoos maintain a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listener for database connection

db.on('connected', ()=> {
    console.log("Connected to MongoDB server");
})

db.on('error', (err)=> {
    console.log("MongoDB Connection error: ", err);
})

db.on('disconnected', ()=> {
    console.log("MongoDB Disconnected");
})

//Export the database connection
module.exports = db;
