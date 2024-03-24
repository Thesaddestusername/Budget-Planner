import React from "react";
import { dollarSign, dateSign, trashBin, typeSign, noteSign } from "../../utils/icons";
import styled from "styled-components";
import Button from "../button/button";
import { DateFormatting } from "../../utils/dateFormatting";

/// MAKE SURE TO IMNPORT AND ADD ICONS


function ExpenseComponent({id, label, amount, date, type, notes, deleteMe, pipColor}){

    const getCategoryIcon =() =>{
        if(type === 'fastfood'){
            return 'fastfoodSign';
        }
        else if(type === 'groceries'){
            return 'groceriesSign';
        }
        else if(type === 'gift'){
            return 'giftSign';
        }
        else if(type === 'gas'){
            return 'gasSign';
        }
        else if(type === 'health'){
            return 'healthSign';
        }
        else if(type === 'online Purchase'){
            return 'onlinePurchaseSign'
        }
        else if(type === 'membership'){
            return 'membershipSign';
        }
        else if(type === 'school/education'){
            return 'schoolSign';
        }
        else if(type === 'travel'){
            return 'travelSign';
        }
        else{
            return '';
        }
    }

    return(
        <StyledExpense pip={pipColor}>
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
                        <div className="deleteButtonContainer">
                        <Button name={"Delete"} icon={trashBin} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'#FFE863'} color={'white'} iColor={'white'} onClick={() => deleteMe(id)}/>
                        </div>
                    </div>    
            </div>  
        </StyledExpense>
    )
}

const StyledExpense = styled.div`
    border: 3px solid #ffe863;
    border-radius: 25px;
    padding: 1rem;
    background: transparent;
    margin-bottom: 1rem;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    .icon{
        width: 90px;
        height: 90px;
        border-radius: 20%;
        background: purple;
        display: flex;
        align-items: center;
        justify-content: center;
        border:  1px solid #ffe863;
        i{
            font-size: 5.0rem;
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
                border-radius: 50%;
                background: ${props=> props.pip};
            }
        }
        .insideInformation{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.6rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    opacity: 0.9;
                }
            }
        }
    }

`;

export default ExpenseComponent;