const express = require('express')
const cors = require('cors')
const { database } = require('./database/database')
const {readdirSync} = require('fs')
const { router } = require('./Routes/Transactions')

const application = express();

// Pulling .env file
require("dotenv").config()

// Pulling port number from .evn file
const PORT = process.env.PORT

// Middleware
application.use(express.json())
application.use(cors())


// Routes
readdirSync('./routes').map((route) => application.use('/api/v1', require('./routes/' + route)))


// SERVER WORK IS HERE
// Server function. It will start the server and listen on the port
const server = () => {
    database()

    application.listen(PORT, () => {
        console.log(`Server is running and listening on port ${PORT}`)
    })
}

server()