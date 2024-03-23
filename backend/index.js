const express = require('express')
const cors = require('cors')
const { database } = require('./database/database')
const {readdirSync} = require('fs')
const { router } = require('./Routes/Transactions')
const cookieParser = require('cookie-parser')
const { requireAuth } = require('./middleware/auth')

const application = express();

// Pulling .env file
require("dotenv").config()

// Pulling port number from .evn file
const PORT = process.env.PORT

// Middleware
application.use(express.json())

application.use(cors())

application.use(cookieParser())


// Routes
readdirSync('./routes').map((route) => application.use('/api',  require('./routes/' + route), requireAuth))
// Routes will need to be added here for all of the web pages that will be accessible. 
// Example of what it should look like when authentication is required:
// application.get('/dashboard', requireAuth, (req, res) => { res.render('dashboard')})


// Server function. It will start the server and listen on the port specified in the .env
const server = () => {
    database()

    application.listen(PORT, () => {
        console.log(`Server is running and listening on port ${PORT}`)
    })
}

server()