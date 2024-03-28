import React from "react";
import {Chart,  registerables } from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { GetMainContext } from "../../context/mainContext";
import { DateFormatting } from "../../utils/dateFormatting";

// Registers all of the correct fields to the chard based on which type it is; In this case its a bar graph;
Chart.register(...registerables)

//Creates and displays a barGraph component// IT IS NAMED LINEGRAPH AS IT USED TO BE A LINE GRAPH UNTIL  RECENTLY CHANGED BUT THERE ARE TOO MANY REFACTORS TO RENAME IT;
function LineGraph(){

    // gets all required arrays from the mainProvider;
    const {incomes, expenses} = GetMainContext();

    // Puts all of the specifics we will use for the bar graph into an info const; This specifies what the labes and datasets will be for the graph;
    const info = {
        //Maps the incomes array, destructures the date, sorts the dates, and formats the dates based on the dateformat util and sets the graphs label to it; 
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

    // Displays graph based on info desribed above;
    return(
        <StyledGraph>
            <h1>All Transactions</h1>
            <Bar data={info}/>
        </StyledGraph>
    )
}


// Create a styled component for what surrounds the graph;
const StyledGraph = styled.div`
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
    background: #ddecf0;
    border: 1px solid #EFE9AE;
    padding: 1rem;
    border-radius: 25px;
    height: 100%;
`;

export default LineGraph;