import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import { GetMainContext } from "../../context/mainContext";
import IncomeComponent from "../incomeComponent/incomeComponent";
import Form from "../forms/form";

//Incomes is the page that combines form and the income component to make a cohesive display;
function Incomes(){
    // gets all required functions and data arrays from the mainProvider;
    const {incomes, getIncomes, deleteIncome, calcTotalIncome} = GetMainContext()
    //gets and refreshed incomes and expenses on render;
    useEffect(() =>{getIncomes()}, [])
    //HTML to render expense page; As you can see it includes our form2 component as well as many expense components;
    return(
        <StyledIncomes>
            <InnerLayout>
                <h1 className="totalIncome">
                    Income Total: <span>+${calcTotalIncome().toFixed(2)}</span>  
                </h1>
                <h2>Incomes</h2>
                <div className = "incomePage">
                    <div className= "IncomeInfo">
                        <Form/>
                    </div>
                    <div className="incomes">
                        {/* maps the expenses array we receive from the provider and destructures them so we can display their fields in the expense component */}
                        {incomes.map((income => {
                            const{_id, label, amount, date, type,  notes} = income;
                            return<IncomeComponent key={_id} id={_id} label={label} amount={amount} date={date} type={type} notes={notes} pipColor="green" deleteMe={deleteIncome}/>
                        }))}
                    </div>
                </div>
            </InnerLayout>
        </StyledIncomes>
    )
}

//Created and incomes page styled div;
const StyledIncomes= styled.div`
    display: flex;
    overflow: auto;
    .totalIncome{
        display:flex;
        justify-content: center;
        align-items: center;
        background: white;
        //border: 2px solid #ffe863;
        border: 2px solid #CDEAC0; 
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 3rem;
        gap: .5rem;
        span{
            font-size: 3rem;
            font-weight: 900;
            color: #CDEAC0;
        }

    }
    .incomePage{
            display: flex;
            gap: 2rem;
            .IncomeInfo{
                flex: 1;
            }
    }
`;

export default Incomes;
