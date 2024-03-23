const ExpenseSchema = require('../models/ExpenseModel') // Despite this throwing an error in VSCode, it is actually needed for the app to work.

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body
    const newExpense = new ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    
    console.log(newExpense)

    try {
        // Validation of the incoming data
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "Please ensure that all fields are filled in!" })
        }
        // Amount must be above 0
        if (amount <= 0) {
            return res.status(400).json({ message: "Please enter a positive number for income" })
        }

        // Save the income to the database
        await newExpense.save()
        res.status(200).json({ message: "Expense added successfully" })

    }
    // Error handling
    catch (error) {
        console.log(error)
    }
}

// Get all expenses
exports.getExpense = async (req, res) => {
    try{
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expense)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// Used to delete an expense from the database
exports.deleteExpense = async (req, res) => {
    const {id} = req.params
    ExpenseSchema.findbyIDAndDelete(id)
    .then((expense) => res.status(200).json({message: "Expense deleted successfully"}))
    .catch((error) => res.status(500).json({message: error.message}))
}