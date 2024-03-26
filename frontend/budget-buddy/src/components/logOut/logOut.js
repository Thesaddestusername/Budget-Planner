import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import Button from "../button/button";
import { noSign, yesSign } from "../../utils/icons";
import { GetMainContext } from "../../context/mainContext";

function LogOut({setCurrent}){
    const{setLoggedIn, logOut} = GetMainContext();
    return(
        <StyledLogOut>
            <InnerLayout>
                <h1 className="logOut">Log Out?</h1>
                <div className="buttons">
                    <Button name={"No"} icon={noSign} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'white'} color={'var(--primaryColor)'} iColor={'white'} onClick={() => setCurrent(3)}/>
                    <Button name={"Yes"} icon={yesSign} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'white'} color={'var(--primaryColor)'} iColor={'white'} onClick={() => {setLoggedIn(false); logOut(); setCurrent(5)}}/>
                </div>
            </InnerLayout>
        </StyledLogOut>
    )
}

const StyledLogOut = styled.div`
    margin: auto;
    width: 400px;
    padding-top: 25%;
    text-align: center;
    .buttons{
        padding: 2rem;
        display: flex;
        gap: 5rem;
    }
`;

export default LogOut;
