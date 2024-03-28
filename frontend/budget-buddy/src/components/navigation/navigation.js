import React, {useEffect} from "react";
import styled from "styled-components";
import profilePic from "../../images/budgetBuddyIconFixedUp.png"
import { dropDownItems, dropDownItemsChild } from "../../utils/dropDownItems";
import { GetMainContext } from "../../context/mainContext";

// Displays the sidebar navigation that is passed in both current so it know which page it is on, and setCurrent so it can change pages;
function Navigation({current, setCurrent}){
    // gets all required functions and data arrays from the mainProvider;
    const{calcTotalBalance, getIncomes, getExpenses, getUserInfo, userInfo} = GetMainContext();
    // calculates total balance, get incomes, gets expenses, and user info on render;
    useEffect(() =>{calcTotalBalance(); getIncomes(); getExpenses(); getUserInfo();}, [])
    // HTML to render dropdown menu;
    return(
        <StyledNav>
            <div className="userDiv">
                <img className="icon" src={profilePic} alt=""/>
                <div className="username">
                    <h2>Current Balance</h2>
                    <p>${calcTotalBalance().toFixed(2)}</p>
                </div>
                <ul className="dropDownItems">
                    {/* if the user is a not a child it will map through the dropdown items display them based on their destructured parameters and set themselves to current onclick as well as change the page/current using setCurrent */}
                    {/*If the user is a child it will do the same thing without showing the add a child page by accessing different dropdown item*/}
                    {(userInfo.isChild) ?
                    dropDownItemsChild.map((item)=>{return <li key = {item.id} onClick={() => setCurrent(item.id)} className={current === item.id ? 'current': ''}>{item.icon}<span>{item.title}</span></li>})
                    : dropDownItems.map((item)=>{return <li key = {item.id} onClick={() => setCurrent(item.id)} className={current === item.id ? 'current': ''}>{item.icon}<span>{item.title}</span></li>})
                    }
                </ul>
                <div className="lowerNav">
                    Signed In As: {userInfo.email}
                </div>
            </div>
        </StyledNav>
    )
}

// Created a styled component for the side bar navigation;
const StyledNav = styled.nav`

    img{
        max-width: 100%;
        height: auto;
        border-radius: 80px;
    }
    h2{
        text-decoration: underline;
        font-size: 27px;
    }
    padding: 2rem 1.5rem;
    width: 300px;
    height: 52dvw;
    //background-color: rgba(135, 54, 170, 0.8);
    background-color: #A7C7E7;
    border: 2px solid #EFE9AE;
    backdrop-filter: blur(3px);
    border-radius: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    userDiv{
        //height: 100px;
        //display: flex;
        //align-items: center;
        //gap: 0.5rem;

    }
    .dropDownItems{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 35px auto;
            align-items: center;
            margin: 0.7rem 0;
            padding-left: 1rem;
            position: relative;
        }
    }
    .lowerNav {
        font-size: 15px;
        width: 250px;
        position: absolute;
        bottom: 30px;
        text-align: left;
        
    
    }
    .current{
        //color: rgba(255,217,61, 0.9) !important;
        color: white;
        i{
            //color: rgba(255,217,61, 0.9) !important; 
            color: white;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 10px;
            height: 25%;
            //background: rgba(255,217,61, 0.9);
            background: white;
            border-radius: 10px 10px 10px 10px;
        }
    }
`;

export default Navigation;