const IncomeSchema = require('../Models/IncomeModel') // Despite this throwing an error in VSCode, it is actually needed for the app to work.

// Add an income to the database
exports.addIncome = async (req, res) => {
    const { label, amount, date, type, notes} = req.body
    const newIncome = new IncomeSchema({
        label,
        amount,
        date,
        type,
        notes,
    })
    // Grabbing belongsto parameter from the request.
    const belongsto = res.locals.user
    // Console logging for debug.
    //console.log(belongsto + " is the user")

    // Assigning the belongsto parameter to the newIncome object.
    newIncome.belongsto = belongsto
    
    // Console logging for debug.
    //console.log(newIncome)

    try {
        // Validation of the incoming data
        if (!label || !type || !notes || !date || !amount) {
            return res.status(400).json({ message: "Please ensure that all fields are filled in!" })
        }
        // Ensuring a user is logged in before adding an income
        if (belongsto == null || !belongsto){
            return res.status(400).json({ message: "Please ensure that you are logged in!" })
        }
        // Amount must be above 0
        if (amount <= 0) {
            return res.status(400).json({ message: "Please enter a positive number for income" })
        }

        // Save the income to the database
        await newIncome.save()
        res.status(200).json({ message: "Income added successfully" })

    }
    // Error handling
    catch (error) {
        console.log(error)
    }
}

// Get all incomes
exports.getIncome = async (req, res) => {
    try{
        // Get all incomes belonging to the user
        const incomes = await IncomeSchema.find({belongsto: res.locals.user.id}).sort({createdAt: -1})
 
        // If the user is not a child, get the incomes for the children as well.
        // Getting incomes for child 1
        if (res.locals.user.child1){
            const child1Incomes = await IncomeSchema.find({belongsto: res.locals.user.child1}).sort({createdAt: -1})
            if (child1Incomes.length > 0)
                incomes.push(child1Incomes)
        }
        // Getting incomes for child 2
        if (res.locals.user.child2){
            const child2Incomes = await IncomeSchema.find({belongsto: res.locals.user.child2}).sort({createdAt: -1})
            if (child2Incomes.length > 0)
                incomes.push(child2Incomes)
        }
        // Return the incomes
        res.status(200).json(incomes)       
    }
    // Error handling
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// Used to delete an income from the database
exports.deleteIncome = async (req, res) => {
    // Grabbing the id from the request parameters
    const {id} = req.params
    // Deleting the income from the database
    IncomeSchema.findByIdAndDelete(id)
    // If the income is deleted successfully, return a message saying so.
    .then((income) => res.status(200).json({message: "Income deleted successfully"}))
    // If there is an error, return the error message.
    .catch((error) => res.status(500).json({message: error.message}))
}