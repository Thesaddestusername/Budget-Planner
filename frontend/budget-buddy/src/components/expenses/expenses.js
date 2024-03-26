import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import { GetMainContext } from "../../context/mainContext";
import ExpenseComponent from "../exepnseComponent/expenseComponent";
import Form2 from "../forms/form2";

function Expenses(){
    const {expenses, deleteExpense, calcTotalExpense, getExpenses} = GetMainContext()
    useEffect(() =>{getExpenses()}, [])
    return(
        <StyledExpense>
            <InnerLayout>
                <h1 className="totalExpense">
                    Expense Total: <span>-${calcTotalExpense().toFixed(2)}</span>  
                </h1>
                <h2>Expenses</h2>
                <div className = "expensePage">
                    <div className= "expenseInfo">
                        <Form2/>
                    </div>
                    <div className="expenses">
                    {expenses.map((expense=> {
                            const{_id, label, amount, date, type,  notes} = expense;
                            return<ExpenseComponent key={_id} id={_id} label={label} amount={amount} date={date} type={type} notes={notes} pipColor="red" deleteMe={deleteExpense}/>
                        }))}
                    </div>
                </div>
            </InnerLayout>
        </StyledExpense>
    )
}

const StyledExpense= styled.div`
    display: flex;
    overflow: auto;
    .totalExpense{
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
            color: red;
        }

    }
    .expensePage{
            display: flex;
            gap: 2rem;
            .expenseInfo{
                flex: 1;
            }
    }
`;

export default Expenses;