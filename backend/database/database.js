// DATABASE WORK IS DONE HERE
const mongoose = require('mongoose');

// Creating database function as an async function
const database = async() => {
    try {
        // Setting strictQuery to false
        mongoose.set('strictQuery', false)
        // Connecting to the database
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database is connected')

    } 
    // Error handling
    catch (error) {
        console.log("Database connection error.", error.message)
    }
}
// Exporting the database function
exports.database = database;