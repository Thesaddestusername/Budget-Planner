// Homebrew middleware used to check if the user is authenticated or not, if not they are redirected to the login page.
const jwt = require('jsonwebtoken')
const User = require('../Models/UserModel')
require("dotenv").config()

// Grab the secret from the .env file
const secret = process.env.SECRET

// Middleware to check if the user is authenticated
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    // Check if the token exists
    if(token){
        // Verify the token
        jwt.verify(token, secret, (err, decodedToken) => {
            // If there is an error, redirect to the login page
            if(err){
                console.log(err.message)
                res.redirect('/login')
            } 
            // If the token is valid, move on to the next middleware
            else {
                console.log(decodedToken)
                next()
            }
        })
    }
    // If the token does not exist, redirect to the login page
    else {
        res.redirect('/login')
    }
}

// Check the current user
const checkUser = (req, res, next) => {
    // Grab the token from the cookies
    const token = req.cookies.jwt
    // If the token exists, verify the token
    if(token){
        // Verify the token
        jwt.verify(token, secret, async (err, decodedToken) => {
            // If there is an error, set the user to null
            if(err){
                console.log(err.message)
                res.locals.user = null
                next()
            } 
            // If the token is valid, grab the user from the database
            else {
                console.log(decodedToken)
                // Grab the user from the database
                let user = await User.findById(decodedToken.id)
                // Set the user to the user from the database
                res.locals.user = user
                //console.log("User: ", user.id)
                next()
            }
        })
    } 
    // If the token does not exist, set the user to null
    else {
        res.locals.user = null
        next()
    }
}

// Exporting the middleware
module.exports = {requireAuth, checkUser}