import React from "react";
import { dollarSign, dateSign, trashBin, typeSign, noteSign, salarySign, giftSign, refundSign, stockSign, cryptoSign, soldSign, liquidationSign, miscSign } from "../../utils/icons";
import styled from "styled-components";
import Button from "../button/button";
import { DateFormatting } from "../../utils/dateFormatting";


// Is the container/component for incomes that have been added. Takes in parameters for information that wil be displayed EXCEPT for ID which will be useful when it needs to be deleted;
// IMPORTANT this also takes in a deleteMe parameter ment to be a function that facilitates self delete;
function IncomeComponent({id, label, amount, date, type, notes, deleteMe, pipColor}){

    // getter that displays proper icon based on the type passed in;
    const getCategoryIcon =() =>{
        if(type === 'salary'){
            return salarySign;
        }
        else if(type === 'bank'){
            return dollarSign;
        }
        else if(type === 'gift'){
            return giftSign;
        }
        else if(type === 'refund'){
            return refundSign;
        }
        else if(type === 'stocks'){
            return stockSign;
        }
        else if(type === 'crypto'){
            return cryptoSign;
        }
        else if(type === 'nft'){
            return cryptoSign;
        }
        else if(type === 'sale'){
            return soldSign;
        }
        else if(type === 'liquidation'){
            return liquidationSign;
        }
        else{
            return miscSign;
        }
    }

    //HTML for what will be rendered referencing many parameters of the income component to display correct info;
    return(
        <StyledIncome pip={pipColor}>
            <div className="icon">
                {getCategoryIcon()}
            </div>
            <div className="information">
                <h5>{label}</h5>
                    <div className="insideInformation">
                        <div className="text">
                            <p>{dollarSign} {amount}</p>
                            <p>{dateSign} {DateFormatting(date)}</p>
                            <p>{typeSign} {type}</p>
                            <p>{noteSign} {notes}</p>
                        </div>
                        <div className="confirmButton">
                        <Button name={"Delete"} icon={trashBin} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'#FF928B'} color={'white'} iColor={'white'} onClick={() => deleteMe(id)}/>
                        </div>
                    </div>    
            </div>  
        </StyledIncome>
    )
}

// Created an expense component styled div;
const StyledIncome = styled.div`
    border: 3px solid #CDEAC0;
    border-radius: 25px;
    padding: 1rem;
    background: #EFE9AE;
    margin-bottom: 1rem;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    gap: 1rem;
    width: auto;
    .icon{
        width: 90px;
        height: 90px;
        border-radius: 20%;
        background: #A7C7E7;
        display: flex;
        align-items: center;
        justify-content: center;
        border:  1px solid #CDEAC0;
        i{
            font-size: 3.5rem;
        }
    }

    .information{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .3rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 225%;
                background: ${props=> props.pip};
            }
        }
        .insideInformation{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                margin: 5px;
                align-items: center;
                gap: 1.6rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    opacity: 0.9;
                }
            }
        }
    }
    .confirmButton{
        button{
            &:hover{
                background: red !important;
            }
        }
    }

`;

export default IncomeComponent;