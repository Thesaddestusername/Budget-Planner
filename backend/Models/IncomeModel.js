const mongoose = require('mongoose');


const IncomeSchema = new mongoose.Schema({
    // Used to track who the income belongs to
    belongsto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    label: {
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
    notes: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
}, { timestamps: true })

module.exports = mongoose.model('Income', IncomeSchema)