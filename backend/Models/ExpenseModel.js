const mongoose = require('mongoose');

// ExpenseSchema is the schema for keeping track of expenses in the database
const ExpenseSchema = new mongoose.Schema({
    // Added to track what user the expense belongs to
    belongsto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Label of the expense (name)
    label: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    // Amount of the expense (numerical value)
    amount: {
        type: Number,
        required: true,
        maxLength: 1000000,
        trim: true,
    },
    // Type of the expense (where it's from)
    type: {
        type: String,
        default: 'Income',
        required: true,
        trim: true,
        maxLength: 20
    },
    // Date of the expense (When it was or will be made)
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    // Description of the expense (what it's for)
    notes: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
}, { timestamps: true }) // Timestamps are used to track when the expense was created

// Exporting the function
module.exports = mongoose.model('Expense', ExpenseSchema)