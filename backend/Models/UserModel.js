const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        lowercase: true, 
        unique: true,
        validate: [isEmail, 'Please provide a valid email address']
    },

    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: [6, 'Password must be at least 6 characters long']
    }

})

// static method to login users.
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})

    if(user){
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}


userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    console.log('User is being made and saved', this)
    next()
})

userSchema.post('save', function(doc, next){
    console.log('New user was created and saved', doc)
    next()
})

const User = mongoose.model('user', userSchema)

module.exports = User;