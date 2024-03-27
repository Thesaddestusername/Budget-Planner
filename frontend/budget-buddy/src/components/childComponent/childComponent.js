import React from "react";
import { babySign, emailSign, trashBin } from "../../utils/icons";
import styled from "styled-components";
import Button from "../button/button";
import { DateFormatting } from "../../utils/dateFormatting";

/// MAKE SURE TO IMNPORT AND ADD ICONS


function ChildComponent({id, email, label, deleteMe, pipColor}){

    return(
        <StyledChildComp pip={pipColor}>
            <div className="childContainer">
            <div className="icon">
                <p>{babySign} {label}</p>
            </div>
            <div className="information">
                    <div className="insideInformation">
                        <div className="text">
                            <p>{emailSign}   {email}</p>
                        </div>
                        <div className="deleteButtonContainer">
                            <Button name={"Delete"} icon={trashBin} buttonPad={'0.5rem'} buttonRadius={'10px'} buttonBackground={'#FFE863'} color={'white'} iColor={'white'} onClick={() => deleteMe(id)}/>
                        </div>
                    </div>    
            </div>
            </div>
        </StyledChildComp>
    )
}

const StyledChildComp = styled.div`
    .insideInformation {

        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
       
    }
    .childContainer {
        border: 3px solid #EFE9AE;
        border-radius: 25px;
        padding: 1rem;
        background: #FEC3A6;
        margin-bottom: 1rem;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
    
     }
     .deleteButtonContainer {
        display: block;
        width: 115px;
        margin-left: auto;
        margin-right: auto;
     }
`
;

export default ChildComponent;