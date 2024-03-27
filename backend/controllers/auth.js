// Requires
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
require("dotenv").config()
const userSchema = require('../Models/UserModel');
const { default: mongoose } = require('mongoose');

// Grabbing secret from .env
const secret = process.env.SECRET
// Create token
const createToken = (id) => {
    return jwt.sign({id}, secret, {expiresIn: 3 * 24 * 60 * 60})
}


// Error handler (isn't being used anymore, but I made it so it stays)
const errHandler = (err) => {
    // 
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
    // Return errors   
    return errors
}



// Signup controller function
module.exports.signup = async (req, res) => {
    //res.send('Signup page')
    const {email, password} = req.body

    try{
        // Checking if the email and password are present
        if (!email || !password){
            return res.status(400).json({message: "No email or password detected."})
        }
        // Creating a user and saving it to the database
        const user = await User.create(({email, password}))
        // Creating a unique JWT token for the user
        const token = createToken(user._id)
        // Setting the cookie to the token
        res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000})
        console.log("User Created: ", user)
        // Sending a success message to the user
        return res.status(201).json({message: "User created successfully: ", user})
    }

    catch(err){
        // Catch errors and send them to the user
        console.log(err)
        return res.status(500).json({message: "Please provide a valid email and password (6 characters minimum)."})
    }

}

// Login controller function
module.exports.login = async (req, res) => {   
    // Grabbing the email and password from the request body
    const {email, password} = req.body

    try{
        // Checking if the email and password are present
        if (!email || !password){
            return res.status(400).json({message: "No email or password detected."})
        }
        // If user is found, create a token and send it to the user
        const user = await User.login(email, password)
        const token = createToken(user._id)
        // Setting the cookie to the token
        res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000})
        // Sending a success message to the user
        return res.status(200).json({message: "User logged in successfully: ", user})
    }

    catch(err){
        // Catch errors and send them to the user
        console.log(err)
        return res.status(500).json({message: "Incorrect email or password."})
    }
}

/// Logout controller function
module.exports.logout = (req, res) => {
    // Basically clears the cookie and redirects to whatever the home page is.
    res.cookie('jwt', '', {maxAge: 1})
    return res.status(200).json({message: "User logged out successfully"})
    // Not using a redirect
    //res.redirect('/')
}


// Function to add a child to a parent account
module.exports.addChild = async (req, res) => {
    // Grabbing the email and password from the request body
    const {email, password} = req.body
    // If the user is not logged in, return an error
    if (!res.locals.user){
        return res.status(400).json({message: "Please ensure that you are logged in."})
    }
    // If the user is a child, return an error
    if (res.locals.user.isChild){
        return res.status(400).json({message: "A child account cannot have a child."})
    }
    try{
        // If the email or password is missing, return an error
        if (!email || !password){
            return res.status(400).json({message: "No email or password detected."})
        }
        // Getting child account
        const child = await User.login(email, password)
        // If the child is the same as the parent, return an error - this doesn't work though - 
        if (res.locals.userID == child._id){
            return res.status(400).json({message: "A user cannot add themselves as a child."})
        }
        // Grabbing the two children that the parent has and checking if they exist.
        const userHasChild1 = await User.findOne({_id: res.locals.user.id, child1: { $exists: true}})
        const userHasChild2 = await User.findOne({_id: res.locals.user.id, child2: { $exists: true}})
        // If the userhasChild is null, then the child does not exist yet.
        if (userHasChild1){
            // Checking the ID to see if the child has already been added
            if (userHasChild1._id == child._id)
                return res.status(400).json({message: "User already has this child."})
            // Checking to see if the child is already a child on another account
            if (userHasChild1.isChild)
                return res.status(400).json({message: "A child account cannot have a child"})
            // Checking to see if the child is already assigned to this account
            if (userHasChild1._id == child._id)
                return res.status(400).json({message: "User already has this child."})
        }
        // If the userhasChild is null, then the child does not exist yet.
        if (userHasChild2){
            // Checking the ID to see if the child has already been added
            if (userHasChild2._id == child._id)
                return res.status(400).json({message: "User already has this child."})
            // Checking to see if the child is already a child on another account
            if (userHasChild2.isChild)
                return res.status(400).json({message: "A child account cannot have a child"})
            // Checking to see if the child is already assigned to this account
            if (userHasChild2._id == child._id)
                return res.status(400).json({message: "User already has this child."})
        }
        // If the userhasChild is null, then the child does not exist yet.
        if (!userHasChild1){
            console.log ("Adding child to child1")
            // Updating both the parent and child accounts
            await User.updateOne({ _id: res.locals.user.id }, { child1: child })
            await User.updateOne({_id: child._id}, {isChild: true})
        }
        // If they already have one child but not a second
        else if (!userHasChild2){
            console.log ("adding child to child2")
            // Updating both the parent and child accounts
            await User.updateOne({ _id: res.locals.user.id }, { child2: child })
            await User.updateOne({_id: child._id}, {isChild: true})
        }
        // If they have the maximum numebr of chilren
        else{
            return res.status(400).json({message: "You have the maximum number of children."})
        }
        // Save the changes made to parentUser
        return res.status(200).json({message: "Child added successfully: "})
    }

    catch(err){
        // Catch errors and send them to the user
        console.log(err)
        return res.status(500).json({message: "Incorrect email or password."})
    }
}

// Function to get user information
module.exports.getUser = async (req, res) => {
    try {
        // Finding the user by id
        const user = await User.findById(res.locals.user.id)
        if (!user) {
            return res.status(404).json({ message: "User not found." })
        }
        // Send back the user information
        return res.status(200).json(user)
    } catch (err) {
        // Catch errors and send them to the user
        console.log(err)
        return res.status(500).json({ message: "An error occurred." })
    }
}

// Function to get children information
module.exports.getChildren = async (req, res) => {
    try {
        // Finding the user by id
        const user = await User.findById(res.locals.user.id)
        if (!user) {
            return res.status(404).json({ message: "User not found." })
        }

        // Check if the user has children
        if (user.child1 || user.child2) {
            // Create a children object
            let children = {}

            // If child1 exists, add it to the children object
            if (user.child1) 
                children.child1 = await User.findById(user.child1)
            
            // If child2 exists, add it to the children object
            if (user.child2) 
                children.child2 = await User.findById(user.child2)
    
            // Send back the children information
            return res.status(200).json(children)
        } else {
            return res.status(200).json({ message: "No children found." })
        }
    }
    catch (err) {
        // Catch errors and send them to the user
        console.log(err)
        return res.status(500).json({ message: "An error occurred." })
    }
}

// Function to delete a child from a parent account
module.exports.deleteChild = async (req, res) => {
    // Grabbing the childId from the request body
    const {id} = req.params
    try{
        // If there is no ID, return an error
        if (!id){
            return res.status(400).json({message: "No child ID detected."})
        }
        // Finding the parent user (currently logged in user)
        const parentUser = await User.findById(res.locals.user.id)
        // If the child to delete is child1
        if (parentUser.child1){
            if (parentUser.child1.toString() === id){
                // Updating both the parent and child accounts
                await User.updateOne({ _id: res.locals.user.id }, { $unset: { child1: "" }})
                await User.updateOne({ _id: id }, { $set: {isChild : false}})
            }
        }
        // If the child to delete is child2
        else if (parentUser.child2){
            if (parentUser.child2.toString() === id){
                // Updating both the parent and child accounts
                await User.updateOne({ _id: res.locals.user.id }, { $unset: { child2: "" }})
                await User.updateOne({ _id: id }, { $set: {isChild : false}})
            }
        }
        // If the child to delete is not found
        else{
            return res.status(400).json({message: "Child not found."})
        }
        // Send back a success message
        return res.status(200).json({message: "Child deleted successfully: "})
    }

    catch(err){
        // Catch errors and send them to the user
        console.log(err)
        return res.status(500).json({message: "An error occurred."})
    }
}