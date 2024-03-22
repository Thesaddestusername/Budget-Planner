const IncomeSchema = require('../models/IncomeModel') // Despite this throwing an error in VSCode, it is actually needed for the app to work.

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body
    const newIncome = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    
    console.log(newIncome)

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
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// Used to delete an income from the database
exports.deleteIncome = async (req, res) => {
    const {id} = req.params
    IncomeSchema.findbyIDAndDelete(id)
    .then((income) => res.status(200).json({message: "Income deleted successfully"}))
    .catch((error) => res.status(500).json({message: error.message}))
}