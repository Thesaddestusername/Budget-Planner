import React, {useState} from "react";
import { useContext } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:3003/api/";

const mainContext = React.createContext()

export const MainSource = ({children}) => {

    const[incomes, setIncomes] = useState([]);
    const[expenses, setExpenses] = useState([]);
    const[error, setError] = useState(null);

    const addIncome = async(income) => {
        const response = await axios.post(`${BASE_URL}addIncome`, income)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    } 

    const getIncomes = async() => {
        const response = await axios.get(`${BASE_URL}getIncomes`);
        setIncomes(response.data);
        console.log(response.data);
    }

    const deleteIncome = async(id) =>{
        console.log('Before');
        const resolution = await axios.delete(`${BASE_URL}deleteIncome/${id}`)
        console.log('after');
    }

    return(
        <mainContext.Provider value={{addIncome, getIncomes, incomes, deleteIncome}}>
            {children}
        </mainContext.Provider>
    )
}

export const GetMainContext = () =>{
    return useContext(mainContext);
}