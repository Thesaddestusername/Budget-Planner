const mongoose = require('mongoose');


const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 1000000,
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

module.exports = mongoose.model('Income', IncomeSchema)