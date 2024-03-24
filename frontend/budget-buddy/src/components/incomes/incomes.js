import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import { GetMainContext } from "../../context/mainContext";
import IncomeComponent from "../incomeComponent/incomeComponent";
import Form from "../forms/form";

function Incomes(){
    const {addIncome, incomes, getIncomes, deleteIncome} = GetMainContext()
    useEffect(() =>{getIncomes()}, [incomes])
    return(
        <StyledIncomes>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className = "incomePage">
                    <div className= "IncomeInfo">
                        <Form/>
                    </div>
                    <div className="incomes">
                        {incomes.map((income => {
                            const{_id, label, amount, date, type,  notes} = income;
                            return<IncomeComponent key={_id} id={_id} label={label} amount={amount} date={date} type={type} notes={notes} pipColor="#ffd93d" deleteMe={deleteIncome}/>
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
    .incomePage{
            display: flex;
            gap: 2rem;
            .IncomeInfo{
                flex: 1;
            }
    }
`;

export default Incomes;
