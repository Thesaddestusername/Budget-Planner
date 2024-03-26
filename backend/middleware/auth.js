// Homebrew middleware used to check if the user is authenticated or not, if not they are redirected to the login page.
const jwt = require('jsonwebtoken')
const User = require('../Models/UserModel')
require("dotenv").config()


const secret = process.env.SECRET

// Middleware to check if the user is authenticated
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    // Check if the token exists
    if(token){
        jwt.verify(token, secret, (err, decodedToken) => {
            if(!err){
                console.log(err.message)
                res.redirect('/login')
            } else {
                console.log(decodedToken)
                next()
            }
        })
    }
    else {
        res.redirect('/login')
    }
}

// Check the current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, secret, async (err, decodedToken) => {
            if(err){
                console.log(err.message)
                res.locals.user = null
                next()
            } else {
                console.log(decodedToken)
                let user = await User.findById(decodedToken.id)
                res.locals.user = user
                console.log("User: ", user.id)
                next()
            }
        })
    } else {
        res.locals.user = null
        next()
    }
}

module.exports = {requireAuth, checkUser}