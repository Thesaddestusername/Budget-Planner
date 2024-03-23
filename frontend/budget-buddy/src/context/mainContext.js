import React, {useState} from "react";
import { useContext } from "react";
import axios from 'axios';

const BASE_URL = "https://localhost:3003/api/v1/";

const mainContext = React.createContext()

export const MainSource = ({children}) => {

    const[incomes, setIncomes] = useState([]);
    const[expenses, setExpenses] = useState([]);
    const[error, setError] = useState(null);

    const addIncome = async(income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    } 

    return(
        <mainContext.Provider value={{addIncome}}>
            {children}
        </mainContext.Provider>
    )
}

export const GetMainContext = () =>{
    return useContext(mainContext);
}