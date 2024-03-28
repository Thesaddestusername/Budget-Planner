import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import Button from "../button/button";
import { noSign, yesSign } from "../../utils/icons";
import { GetMainContext } from "../../context/mainContext";

// Log in page that is passed in setCurrent so that once the user has been validated it can change the view of the current page;
function LogOut({setCurrent}){
    // gets all required functions from the mainProvider;
    const{setLoggedIn, logOut} = GetMainContext();
    // HTML that includes a user made button component; It is what will be displayed/rendered;
    return(
        <StyledLogOut>
            <InnerLayout>
                <h1 className="logOut">Log Out?</h1>
                {/* buttons that setPage on click */}
                <div className="buttons">
                    <Button name={"No"} icon={noSign} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'#FF928B'} color={'var(--primaryColor)'} iColor={'white'} onClick={() => setCurrent(3)}/>
                    <Button name={"Yes"} icon={yesSign} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'#CDEAC0'} color={'var(--primaryColor)'} iColor={'white'} onClick={() => {setLoggedIn(false); logOut(); setCurrent(5)}}/>
                </div>
            </InnerLayout>
        </StyledLogOut>
    )
}

// Created a logout Styled component;
const StyledLogOut = styled.div`
    margin: auto;
    width: 400px;
    padding-top: 25%;
    text-align: center;
    background: transparent;
    .buttons{
        padding: 2rem;
        display: flex;
        gap: 5rem;
    }
`;

export default LogOut;
