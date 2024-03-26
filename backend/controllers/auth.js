const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
require("dotenv").config()


const secret = process.env.SECRET
// Create token
const createToken = (id) => {
    return jwt.sign({id}, secret, {expiresIn: 3 * 24 * 60 * 60})
}


// Error handler
const errHandler = (err) => {
    console.log(err.message, err.code)
    let errors = {email: '', password: ''}

    // Incorrect email
    if(err.message === 'incorrect email'){
        errors.email = 'That email is not registered'
    }

    // Incorrect password
    if(err.message === 'incorrect password'){
        errors.password = 'That password is incorrect'
    }

    // Duplicate error code
    if(err.code === 11000){
        errors.email = 'That email is already registered'
        return errors
    }

    // Validation errors
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}



// Signup controller function
module.exports.signup = async (req, res) => {
    //res.send('Signup page')
    const {email, password} = req.body

    try{
        // Creating a user and saving it to the database
        const user = await User.create(({email, password}))
        // Creating a unique JWT token for the user
        const token = createToken(user._id)
        res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000})
        console.log("User Created: ", user)
        return res.status(201).json({message: "User created successfully: ", user})
    }

    catch(err){
        console.log(err)
        return res.status(500).json({message: err.message})
    }

}

// Login controller function
module.exports.login = async (req, res) => {   
    // Grabbing the email and password from the request body
    if (!email || !password){
        return res.status(400).json({message: "No email or password detected."})
    }
    const {email, password} = req.body

    try{
        // If user is found, create a token and send it to the user
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000})
        return res.status(200).json({message: "User logged in successfully: ", user})
    }

    catch(err){
        // Catch errors and send them to the user
        console.log(err)
        return res.status(500).json({message: err.message})
    }
}

/// Logout controller function
module.exports.logout = (req, res) => {
    // Basically clears the cookie and redirects to whatever the home page is.
    res.cookie('jwt', '', {maxAge: 1})
    res.redirect('/')
}