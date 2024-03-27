const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

// Schema for the user (pretty self explanatory)
const userSchema = new mongoose.Schema({

    // User's email address. This is unique and required
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        lowercase: true, 
        unique: true,
        // Using a validator to ensure that the email is valid
        validate: [isEmail, 'Please provide a valid email address']
    },
    // User's password. This is hashed before being saved to the database
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        // Passwords must be at least 6 characters long
        minLength: [6, 'Password must be at least 6 characters long']
    },
    // Used to keep track of if the user is a child or not
    isChild:
    {
        type: Boolean,
        required: false,
        default: false
    },
    // For the first child an account can have
    child1: {
        // Storying type objectID
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Child1',
        required: false,
    },
    // For the second child an account can have
    child2: {
        // Storing type objectID 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Child2',
        required: false,
    }

}, {timestamps: true
})

// static method to login users.
userSchema.statics.login = async function(email, password){
    // Finding the user by email
    const user = await this.findOne({email})

    if(user){
        // Comparing the password to the hashed password in the database
        const auth = await bcrypt.compare(password, user.password)
        // If the password is correct, return the user
        if(auth){
            return user
        }
        // If the password is incorrect, throw an error
        throw Error('incorrect password')
    }
    // If the email is incorrect, throw an error
    throw Error('incorrect email')
}

// Hashing the password before saving it to the database
userSchema.pre('save', async function(next){
    // Generating a salt for the password
    const salt = await bcrypt.genSalt();
    // Hashing the password
    this.password = await bcrypt.hash(this.password, salt)
    // Moving on to the next middleware and logging that a user is being made.
    console.log('User is being made and saved', this)
    next()
})

// Logging the user that was created and saved
userSchema.post('save', function(doc, next){ 
    // Logging the user that was created and saved
    console.log('New user was created and saved', doc)
    next()
})

// Creating the user model
const User = mongoose.model('user', userSchema)

// Exporting the user model
module.exports = User;