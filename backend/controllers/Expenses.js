const ExpenseSchema = require('../models/ExpenseModel') // Despite this throwing an error in VSCode, it is actually needed for the app to work.

exports.addExpense = async (req, res) => {
    const { label, amount, type, notes, date } = req.body
    const newExpense = new ExpenseSchema({
        label,
        amount,
        type,
        notes,
        date
    })
    

    // Grabbing belongsto parameter from the request.
    const belongsto = res.locals.user
    // Console logging for debug.
    //console.log(belongsto + " is the user")

    // Assigning the belongsto parameter to the newIncome object.
    newExpense.belongsto = belongsto

    // For debugging
    //console.log(newExpense)

    try {
        // Validation of the incoming data
        if (!label || !type || !notes || !date || !amount) {
            return res.status(400).json({ message: "Please ensure that all fields are filled in!" })
        }
        // Ensuring a user is logged in before adding an expense
        if (belongsto == null || !belongsto){
            return res.status(400).json({ message: "Please ensure that you are logged in!" })
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
    // Make sure it's using the lowercase Id, not ID. This caused me lots of pain.
    ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => res.status(200).json({message: "Expense deleted successfully"}))
    .catch((error) => res.status(500).json({message: error.message}))
}