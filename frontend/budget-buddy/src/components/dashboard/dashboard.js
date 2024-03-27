import React, {useEffect} from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import LineGraph from "../graphs/lineGraph";
import { GetMainContext } from "../../context/mainContext";
import RecentHistory from "../recentHistory/recentHistory";

function Dashboard(){
    const{calcTotalIncome, calcTotalExpense, getExpenses, getIncomes, calcTotalBalance} = GetMainContext();
    useEffect(() =>{getIncomes(); getExpenses()}, [])
    return(
        <StyledDash>
            <InnerLayout>
                <div className="budgetInfo">
                    <div className="recentHistory">
                        <RecentHistory/>
                    </div>
                    <div className="graphContainer">
                        <LineGraph/>
                    </div>
                    <div className="totals">
                        <div className="totalIncome">
                            <h2>Total Income: +${calcTotalIncome().toFixed(2)}</h2>
                        </div>
                        <div className="totalExpenses">
                            <h2 className="total" >Total Expenses: -${calcTotalExpense().toFixed(2)} </h2>
                        </div>
                        <div className="totalBalance">
                            <h2 className="total">Current Balance: ${calcTotalBalance().toFixed(2)}</h2>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </StyledDash>
    )
}

const StyledDash = styled.div`
    .budgetInfo{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        background: #A7C7E7
    }
    .graphContainer {
        background: #A7C7E7
    }
    .recentHistory{
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
        background: #EFE9AE;
        border: 1px solid #ffe863;
        padding: 1rem;
        border-radius: 25px;
        height: 100%;
        grid-column: 1/3;
    }
    .graphContainer{
        grid-column: 3/6;
    }
    .totals{
        display:flex;
        gap: 2rem;
        grid-column: 1/6;
        .totalIncome, .totalExpenses, .totalBalance{
            box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
            background: #EFE9AE;
            border: 1px solid #ffe863;
            padding: 1rem;
            border-radius: 25px;
            height: 100%;
        }
    }
`;

export default Dashboard;

