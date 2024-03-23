import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import { GetMainContext } from "../../context/mainContext";
import Form from "../forms/form";

function Incomes(){
    const {addIncome} = GetMainContext()
    return(
        <StyledIncomes>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className = "incomePage">
                    <div className= "IncomeInfo">
                        <Form/>
                    </div>
                </div>
            </InnerLayout>
        </StyledIncomes>
    )
}

const StyledIncomes= styled.div`

`;

export default Incomes;
