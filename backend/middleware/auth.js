// Homebrew middleware used to check if the user is authenticated or not, if not they are redirected to the login page.
const jwt = require('jsonwebtoken')
require("dotenv").config()


const secret = process.env.SECRET

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    // Check if the token exists
    if(token){
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
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

module.exports = {requireAuth}