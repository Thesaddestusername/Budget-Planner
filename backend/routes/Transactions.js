const {addIncome, getIncome, deleteIncome,} = require('../controllers/Income')
const {addExpense, getExpense, deleteExpense} = require('../controllers/Expenses') // VScode is mad at this too but it works so...

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router