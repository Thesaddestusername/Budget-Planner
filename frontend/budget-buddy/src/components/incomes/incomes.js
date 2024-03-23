import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import { GetMainContext } from "../../context/mainContext";

function Incomes(){
    const {addIncome} = GetMainContext()
    return(
        <StyledIncomes>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className = "incomePage">
                    <div className= "IncomeInfo">

                    </div>
                </div>
            </InnerLayout>
        </StyledIncomes>
    )
}

const StyledIncomes= styled.div`

`;

export default Incomes;
