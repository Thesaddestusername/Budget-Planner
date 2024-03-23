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




module.exports.signup = async (req, res) => {
    //res.send('Signup page')
    const {email, password} = req.body

    try{
        const user = await User.create(({email, password}))
        // Creating a token
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

module.exports.login = async (req, res) => {   
    const {email, password} = req.body
    
    try{
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000})
        return res.status(200).json({message: "User logged in successfully: ", user})
    }

    catch(err){
        console.log(err)
        return res.status(500).json({message: err.message})
    }
}

module.exports.logout = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1})
    res.redirect('/')
}