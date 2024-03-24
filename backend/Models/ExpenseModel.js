const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    // Added to track what user the expense belongs to
    belongsto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true,
    },
    type: {
        type: String,
        default: 'Income',
        required: true,
        trim: true,
        maxLength: 20
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
}, { timestamps: true })

module.exports = mongoose.model('Expense', ExpenseSchema)