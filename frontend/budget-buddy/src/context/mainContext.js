import React, {useState} from "react";
import { useContext } from "react";
import axios from 'axios';

//Setting axios default with credentials to true allows for proper cookie usage;
axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:3003/api/";

// Creates a main/global contexts useing React's context state handling API; 
const mainContext = React.createContext()

// Creates the source for main context;
export const MainSource = ({children}) => {

    //Sets up react hooks for incomes, expenses, errors, the users info and the users children;
    const[incomes, setIncomes] = useState([]);
    const[expenses, setExpenses] = useState([]);
    const[error, setError] = useState(null);
    const[userInfo, setUserInfo] = useState([]);
    const[userChildren, setChildren] = useState([]);

    // created a logged in variable
    let isLoggedIn = false;

    // creates an addIncome function that queries the databsae for users incomes and refreshes the incomes on call;
    const addIncome = async(income) => {
        const response = await axios.post(`${BASE_URL}addIncome`, income)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        getIncomes();
    } 

    // creates an getIncomes function that queries the database and set the incomes array in state hook to the data returned;
    const getIncomes = async() => {
        const response = await axios.get(`${BASE_URL}getIncomes`);
        setIncomes(response.data);
    }

    // creates an deleteIncome function that queries the database deletes incomes by ID and refreshes the incomes on call;
    const deleteIncome = async(id) =>{
        console.log('Before');
        const resolution = await axios.delete(`${BASE_URL}deleteIncome/${id}`)
        getIncomes();
    }

    // Calculates total income based on incomes state hook array;
    const calcTotalIncome = () =>{
        let total = 0;
        incomes.forEach((income) =>{
            total += income.amount;
        })
        return total;
    }

    // creates an getExpenses function that queries the database and set the expenses array in state hook to the data returned;
    const getExpenses = async() => {
        const response = await axios.get(`${BASE_URL}getExpenses`);
        setExpenses(response.data);
    }

    // creates an addExpense function that queries the database for users expenses and refreshes the expenses on call;
    const addExpense = async(expense) => {
        const response = await axios.post(`${BASE_URL}addExpense`, expense)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        getExpenses();
    } 

    // creates an deleteExpense function that queries the database deletes expenses by ID and refreshes the expenses on call;
    const deleteExpense = async(id) =>{
        const resolution = await axios.delete(`${BASE_URL}deleteExpense/${id}`)
        getExpenses();
    }


    // Calculates total expense based on expenses state hook array;
    const calcTotalExpense = () =>{
        let total = 0;
        expenses.forEach((expense) =>{
            total += expense.amount;
        })
        return total;
    }

    // Calculates total balance based on incomes and expenses state hook array;
    const calcTotalBalance = () =>{
        let total = 0;
        total -= calcTotalExpense();
        total += calcTotalIncome();
        return total;
    }

    // gets a recent transactions by destructuring the incomes and expenses into and array; Then sort and check the date using the built in created at function; Then slice so its shows only the last 6;
    const recentTransactionHistory = () =>{
        const recentHistory = [...incomes, ...expenses];
        recentHistory.sort((x, y) => {return new Date(y.createdAt) - new Date(x.createdAt)});
        return recentHistory.slice(0, 6);
    }

    // signs Up user function by correct database shcema passing in user;
    const signUp = async(user) => {
        console.log("signedUp");
        const response = await axios.post("http://localhost:3003/signup", user)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    }

    // Setter for logged in value;
    const setLoggedIn = (loggedInvalue) =>{
        isLoggedIn = loggedInvalue;
    }

    // Getter for logged in value;
    const getLoggedIn = () =>{
        return isLoggedIn;
    }

    // Logs out user based on database logout;
    const logOut = async() =>{
        const response = await axios.get("http://localhost:3003/logout")
    }

    // quries the database for user info and uses react hook to store data from response;
    const getUserInfo = async() => {
        const response = await axios.get(`${BASE_URL}getUser`);
        setUserInfo(response.data);
    }

    // quries the database for user info and uses react hook to store data from response;
    const getChildren = async() => {
        const response = await axios.get(`${BASE_URL}getChildren`);
        setChildren(response.data);
    }

    // creates an deleteChild function that queries the database deletes child by ID and refreshes the children on call;
    const deleteChild = async(id) =>{
        const resolution = await axios.delete(`${BASE_URL}deleteChild/${id}`)
        getChildren();
    }

    // creates an addChild function that queries the database for users children and refreshes the expenses on call;
    const addChild = async(addedChild) =>{
        const resolution = await axios.post(`${BASE_URL}addChild/`, addedChild)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        getChildren();
    }

    //Returns the mainContext as a provider that passes all of the neccesarry info to all of its children components that require it;
    return(
        <mainContext.Provider value={{addIncome, getIncomes, incomes, deleteIncome, calcTotalIncome, addExpense, getExpenses, deleteExpense, calcTotalExpense, expenses, calcTotalBalance, recentTransactionHistory, signUp, error, getLoggedIn, setLoggedIn, logOut, getChildren, userChildren, deleteChild, getUserInfo, userInfo, addChild, setError}}>
            {children}
        </mainContext.Provider>
    )
}

export const GetMainContext = () =>{
    return useContext(mainContext);
}