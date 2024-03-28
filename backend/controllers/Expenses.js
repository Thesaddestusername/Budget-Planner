const ExpenseSchema = require('../Models/ExpenseModel') // Despite this throwing an error in VSCode, it is actually needed for the app to work.

// Add an expense to the database
exports.addExpense = async (req, res) => {
    const { label, amount, type, notes, date } = req.body
    // Creating a new expense object
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
        // Get all expenses belonging to the user
        expense = await ExpenseSchema.find({belongsto: res.locals.user.id}).sort({createdAt: -1})
        // Getting expenses for child 1
        if (res.locals.user.child1){
            const child1Expenses = await ExpenseSchema.find({belongsto: res.locals.user.child1}).sort({createdAt: -1})
            if (child1Expenses.length > 0){
                // Adding the child's name to the expense to the label field
                child1Expenses.forEach((expense) => {
                    // Add the child's name to the expense to the label field
                    expense.label = expense.label + " (Child 1)"
                })
                expense = expense.concat(child1Expenses) // If there are expenses for child 1, add them to the expenses array
            }
        }
        // Getting expenses for child 2
        if (res.locals.user.child2){
            const child2Expenses = await ExpenseSchema.find({belongsto: res.locals.user.child2}).sort({createdAt: -1})
            if (child2Expenses.length > 0){
                // Adding the child's name to the expense to the label field
                child2Expenses.forEach((expense) => {
                    // Add the child's name to the expense to the label field
                    expense.label = expense.label + " (Child 2)"
                })
                expense = expense.concat(child2Expenses) // If there are expenses for child 2, add them to the expenses array
            }
        }
        // Returning the expenses
        res.status(200).json(expense)
    }
    // Error handling
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// Used to delete an expense from the database
exports.deleteExpense = async (req, res) => {
    const {id} = req.params
    // Make sure it's using the lowercase Id, not ID. This caused me lots of pain.
    ExpenseSchema.findByIdAndDelete(id)
    // If the expense is deleted successfully, return a message.
    .then((expense) => res.status(200).json({message: "Expense deleted successfully"}))
    // If there is an error, return the error message.
    .catch((error) => res.status(500).json({message: error.message}))
}