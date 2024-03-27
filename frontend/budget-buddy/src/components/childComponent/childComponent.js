import React from "react";
import { babySign, noteSign, trashBin } from "../../utils/icons";
import styled from "styled-components";
import Button from "../button/button";
import { DateFormatting } from "../../utils/dateFormatting";

/// MAKE SURE TO IMNPORT AND ADD ICONS


function ChildComponent({id, email, label, deleteMe, pipColor}){

    return(
        <StyledChildComp pip={pipColor}>
            <div className="icon">
                {babySign}
            </div>
            <div className="information">
                <h5>{label}</h5>
                    <div className="insideInformation">
                        <div className="text">
                            <p>{'emailSign'}{email}</p>
                        </div>
                        <div className="deleteButtonContainer">
                            <Button name={"Delete"} icon={trashBin} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'#FFE863'} color={'white'} iColor={'white'} onClick={() => deleteMe(id)}/>
                        </div>
                    </div>    
            </div>
        </StyledChildComp>
    )
}

const StyledChildComp = styled.div`
`
;

export default ChildComponent;