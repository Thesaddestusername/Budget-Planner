const {addIncome, getIncome, deleteIncome,} = require('../controllers/Income')
const {addExpense, getExpense, deleteExpense} = require('../controllers/Expenses') // VScode is mad at this too but it works so...
const {signup, login, logout, addChild} = require('../controllers/auth')

const router = require('express').Router();


router
    // Routes for adding getting and deleting incomes and expenses.
    .post('/addIncome', addIncome)
    .get('/getIncomes', getIncome)
    .delete('/deleteIncome/:id', deleteIncome)
    .post('/addExpense', addExpense)
    .get('/getExpenses', getExpense)
    .delete('/deleteExpense/:id', deleteExpense)
    
    // Route for adding a child user to a parent account
    .post('/addChild', addChild)

module.exports = router