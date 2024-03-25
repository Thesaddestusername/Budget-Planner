// Important includes for all modules and files required.
const express = require('express')
const cors = require('cors')
const { database } = require('./database/database')
const {readdirSync} = require('fs')
const { router } = require('./routes/Transactions')
const cookieParser = require('cookie-parser')
const { requireAuth, checkUser } = require('./middleware/auth')
const {login, signup} = require('./controllers/auth')

const application = express();

// Pulling .env file
require("dotenv").config()

// Pulling port number from .evn file
const PORT = process.env.PORT

        // Middleware //

//Express middleware to parse incoming requests with JSON payloads        
application.use(express.json())
// Cors middleware to allow for cross-origin requests
application.use(cors())
// Cookie parser middleware to parse incoming cookies
application.use(cookieParser())
// Each page from the backend behind API will requireAuth. This will check if the user is authenticated or not. If they are not, they will be redirected to the login page.
application.use('api/', requireAuth)
// This is simply used to check if a user is logged in and storing their information in res.locals.user for the database queries.
application.use(checkUser)



        // Routes //

// This is the route that will be used to access the transactions. It will be used to add, get, and delete transactions.
application.use('/api', require('./routes/Transactions'))

// Creating unprotected routes for signup and login
application.post('/signup', signup)
application.post('/login', login)


        // Server function. It will start the server and listen on the port specified in the .env //
const server = () => {
    database()

    application.listen(PORT, () => {
        console.log(`Server is running and listening on port ${PORT}`)
    })
}

server()