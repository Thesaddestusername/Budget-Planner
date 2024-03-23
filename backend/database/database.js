// DATABASE WORK IS DONE HERE
const mongoose = require('mongoose');

// Creating database function as an async function
const database = async() => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database is connected')

    } catch (error) {
        console.log("Database connection error.", error.message)
    }
}

exports.database = database;