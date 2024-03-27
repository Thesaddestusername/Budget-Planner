import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import { GetMainContext } from "../../context/mainContext";
import IncomeComponent from "../incomeComponent/incomeComponent";
import Form from "../forms/form";

function Incomes(){
    const {incomes, getIncomes, deleteIncome, calcTotalIncome} = GetMainContext()
    useEffect(() =>{getIncomes()}, [])
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

const StyledIncomes= styled.div`
    display: flex;
    overflow: auto;
    .totalIncome{
        display:flex;
        justify-content: center;
        align-items: center;
        background: white;
        border: 2px solid #ffe863; 
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 3rem;
        gap: .5rem;
        span{
            font-size: 3rem;
            font-weight: 900;
            color: lightgreen;
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
