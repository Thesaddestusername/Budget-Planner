import React, {useEffect} from "react";
//import {Chart as ChartJS, LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, ArcElement, Legend} from 'chart.js';
import {Chart,  registerables } from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
//import {Line} from 'react-chartjs-2';
import styled from "styled-components";
import { GetMainContext } from "../../context/mainContext";
import { DateFormatting } from "../../utils/dateFormatting";

//ChartJS.register(LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, ArcElement, Legend);
Chart.register(...registerables)

function LineGraph(){

    const {incomes, expenses, getExpenses, getIncomes} = GetMainContext();

    const info = {
        labels: incomes.map((income)=>{const {date} = income; return DateFormatting(date)}).sort(),
        datasets: [
            {
                label: 'Income',
                data: [ ...incomes.map((income) => { const {amount} = income; return amount})],
                backgroundColor: '#CDEAC0',
                tension: .15
            },
            {
                label: 'Expenses',
                data: [...expenses.map((expense) => {const {amount} = expense; return amount})],
                backgroundColor: '#FF928B',
                tension: 0.15
            },
        ]
    }

    return(
        <StyledGraph>
            <h1>All Transactions</h1>
            <Bar data={info}/>
        </StyledGraph>
    )
}

const StyledGraph = styled.div`
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
    background: #D3D3D3;
    border: 1px solid #EFE9AE;
    padding: 1rem;
    border-radius: 25px;
    height: 100%;
`;

export default LineGraph;