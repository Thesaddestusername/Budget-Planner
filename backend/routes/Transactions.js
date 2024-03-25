const {addIncome, getIncome, deleteIncome,} = require('../controllers/Income')
const {addExpense, getExpense, deleteExpense} = require('../controllers/Expenses') // VScode is mad at this too but it works so...
const {signup, login, logout} = require('../controllers/auth')

const router = require('express').Router();


router
    // Routes for adding getting and deleting incomes and expenses.
    .post('/add-income', addIncome)
    .get('/get-incomes', getIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    
    // Routes for authentication
    //.post('/signup', signup)
    //.post('/login', login)
    .get('/logout', logout)

module.exports = router