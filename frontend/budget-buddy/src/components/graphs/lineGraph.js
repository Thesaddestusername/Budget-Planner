import React, {useEffect} from "react";
import {Chart as ChartJS, LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, ArcElement, Legend} from 'chart.js';
import {Line} from 'react-chartjs-2';
import styled from "styled-components";
import { GetMainContext } from "../../context/mainContext";
import { DateFormatting } from "../../utils/dateFormatting";

ChartJS.register(LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, ArcElement, Legend);

function LineGraph(){

    const {incomes, expenses, getExpenses, getIncomes} = GetMainContext();

    const info = {
        labels: expenses.map((expense) =>{const {date} = expense; return DateFormatting(date)}).sort(),
        datasets: [
            {
                label: 'Income',
                data: [ ...incomes.map((income) => { const {amount} = income; return amount})],
                backgroundColor: 'green',
                tension: .15
            },
            {
                label: 'Expenses',
                data: [...expenses.map((expense) => {const {amount} = expense; return amount})],
                backgroundColor: 'red',
                tension: 0.15
            },
        ]
    }

    return(
        <StyledGraph>
            <h1>All Transactions</h1>
            <Line data={info}/>
        </StyledGraph>
    )
}

const StyledGraph = styled.div`
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
    background: white;
    border: 1px solid #ffe863;
    padding: 1rem;
    border-radius: 25px;
    height: 100%;
`;

export default LineGraph;