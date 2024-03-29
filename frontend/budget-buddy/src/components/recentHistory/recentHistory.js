import React from "react";
import styled from "styled-components";
import { GetMainContext } from "../../context/mainContext";

// Creates a container to show the most recent transactions;
function RecentHistory() {
    // Gets the neccessary data array from the mainProvider;
    const{recentTransactionHistory} = GetMainContext();
    const [...recentHistory] = recentTransactionHistory();
    //Sketchy way to check if it is an expense or income; Especially because you can no longer have same category in both expense and income plus have to add each time you add or change form
    // Once you add or remove anything from forms you have to change here and where icon is decided and displayed in expense component and income component;
    const incomeCategories = ['salary','bank', 'refund', 'stocks','gift', 'crypto', 'nft', 'sale', 'liquidation', 'misc'];
    return(
        <StyledHist>
            <h2>Recent Transactions</h2>
            {recentHistory.map((transaction)=>{
                const{_id, label, amount, type} = transaction;
                // HTML to render recent transactions; Does some conditional stylings based on sketchy method described above;
                return(
                    <div key={_id} className="recentTransaction">
                        <p style={{color: incomeCategories.indexOf(type) != -1 ? '#CDEAC0' : '#FF928B' }}>{label}</p>
                        <p style={{color: incomeCategories.indexOf(type) != -1 ? '#CDEAC0' : '#FF928B' }}>{incomeCategories.indexOf(type) != -1 ? `+$${amount}`: `-$${amount}`}</p>
                    </div>
                )
            })}
        </StyledHist>
    )

}

// Created a styled component for recent history;
const StyledHist = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    .recentTransaction{
        background: rgb(34,34,96);
        border: none;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
        padding: 2rem;
        border-radius: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default RecentHistory;