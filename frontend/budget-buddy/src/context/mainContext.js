import React, {useState} from "react";
import { useContext } from "react";
import axios from 'axios';

axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:3003/api/";

const mainContext = React.createContext()

export const MainSource = ({children}) => {

    const[incomes, setIncomes] = useState([]);
    const[expenses, setExpenses] = useState([]);
    const[error, setError] = useState(null);
    const[userInfo, setUserInfo] = useState([]);
    const[userChildren, setChildren] = useState([]);

    let isLoggedIn = false;

    const addIncome = async(income) => {
        const response = await axios.post(`${BASE_URL}addIncome`, income)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        getIncomes();
    } 

    const getIncomes = async() => {
        const response = await axios.get(`${BASE_URL}getIncomes`);
        setIncomes(response.data);
    }

    const deleteIncome = async(id) =>{
        console.log('Before');
        const resolution = await axios.delete(`${BASE_URL}deleteIncome/${id}`)
        getIncomes();
    }

    const calcTotalIncome = () =>{
        let total = 0;
        incomes.forEach((income) =>{
            total += income.amount;
        })
        return total;
    }

    const getExpenses = async() => {
        const response = await axios.get(`${BASE_URL}getExpenses`);
        setExpenses(response.data);
    }

    const addExpense = async(expense) => {
        const response = await axios.post(`${BASE_URL}addExpense`, expense)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        getExpenses();
    } 

    const deleteExpense = async(id) =>{
        const resolution = await axios.delete(`${BASE_URL}deleteExpense/${id}`)
        getExpenses();
    }

    const calcTotalExpense = () =>{
        let total = 0;
        expenses.forEach((expense) =>{
            total += expense.amount;
        })
        return total;
    }

    const calcTotalBalance = () =>{
        let total = 0;
        total -= calcTotalExpense();
        total += calcTotalIncome();
        return total;
    }

    const recentTransactionHistory = () =>{
        const recentHistory = [...incomes, ...expenses];
        recentHistory.sort((x, y) => {return new Date(y.createdAt) - new Date(x.createdAt)});
        return recentHistory.slice(0, 6);
    }

    const signUp = async(user) => {
        console.log("signedUp");
        const response = await axios.post("http://localhost:3003/signup", user)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    }

    const setLoggedIn = (loggedInvalue) =>{
        isLoggedIn = loggedInvalue;
    }

    const getLoggedIn = () =>{
        return isLoggedIn;
    }

    const logOut = async() =>{
        const response = await axios.get("http://localhost:3003/logout")
    }

    const getUserInfo = async() => {
        const response = await axios.get(`${BASE_URL}getUser`);
        setUserInfo(response.data);
    }

    const getChildren = async() => {
        const response = await axios.get(`${BASE_URL}getChildren`);
        setChildren(response.data);
    }

    const deleteChild = async(id) =>{
        const resolution = await axios.delete(`${BASE_URL}deleteChild/${id}`)
        getChildren();
    }

    const addChild = async(addedChild) =>{
        const resolution = await axios.post(`${BASE_URL}addChild/`, addedChild)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        getChildren();
    }

    return(
        <mainContext.Provider value={{addIncome, getIncomes, incomes, deleteIncome, calcTotalIncome, addExpense, getExpenses, deleteExpense, calcTotalExpense, expenses, calcTotalBalance, recentTransactionHistory, signUp, error, getLoggedIn, setLoggedIn, logOut, getChildren, userChildren, deleteChild, getUserInfo, userInfo, addChild, setError}}>
            {children}
        </mainContext.Provider>
    )
}

export const GetMainContext = () =>{
    return useContext(mainContext);
}