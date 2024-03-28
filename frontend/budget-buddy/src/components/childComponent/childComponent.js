import React from "react";
import { babySign, trashBin } from "../../utils/icons";
import styled from "styled-components";
import Button from "../button/button";

// Is the container/component for children that have been added. Takes in parameters for information that wil be displayed EXCEPT for ID which will be useful when it needs to be deleted;
// IMPORTANT this also takes in a deleteMe parameter ment to be a function that facilitates self delete;
function ChildComponent({id, email, label, deleteMe, pipColor}){
    // HTML for child component/container;
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