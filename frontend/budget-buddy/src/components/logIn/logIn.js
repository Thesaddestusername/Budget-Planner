import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import { GetMainContext } from "../../context/mainContext";
import styled from "styled-components";
import Button from "../button/button";
import { InnerLayout } from "../../styles/pageLayouts";
import axios from 'axios';
import profilePic from "../../images/budgetBuddyIconFixedUp.png"

// Log in page that is passed in setCurrent so that once the user has been validated it can change the view of the current page;
function LogIn({ setCurrent }) {

    // creates a setter for an error using a react hook;
    const [error, setError] = useState(null);

    // gets all required functions from the mainProvider;
    const { getLoggedIn, setLoggedIn } = GetMainContext();

    // Uses the useState hooks to keep track of an input state that will store all of the info required to validate and log in a user;
    const [inputState, setInputState] = useState({
        email: '',
        password: ''
    });

    // Specifies inputState fields;
    const { email, password } = inputState;

    // Handles the final submission of login data when my button component is pressed. Does some error checking and logs in the user if it can;
    const handleSubmit = async e => {
        e.preventDefault();
        console.log("submitted")
        // does a database query for user and sets login to true or false depending on the reponse;
        try{
            const response = await axios.post("http://localhost:3003/login", inputState)
            setLoggedIn(true);
        }
        catch(err){
            setError(err.response.data.message);
            setLoggedIn(false);
        }  
        //Set Current changes the page;
        if(getLoggedIn()){
            setCurrent(3);
        }
        setInputState({
        email: '',
        password: ''
        })

    }
    // Handle input is called when the fields onChange is triggered. This sets the input from the input field into a flattened input state using the setInputState hook;
    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }

    // HTML that includes a user made button component; It is what will be displayed/rendered;
    return(
        <StyledLogin onSubmit={handleSubmit}>
            <InnerLayout>
                <h1 className="title">Budget Buddy</h1>
                <img className="icon" src={profilePic} alt=""/>
                <h2 className="errorMsg" style={{color: '#FF928B'}}>{error}</h2>
                <div className="logInField">
                    <div className="inputEffect">
                        <input type="text" required value={email} name={'email'} placeholder="Username" onChange={handleInput('email')}/>
                    </div>
                    <div className="inputEffect">
                        <input type="password" required value={password} name={'password'} placeholder="Password" onChange={handleInput('password')} />
                    </div>
                    <div className="button">
                        <Button name={"Login"} icon={''} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'white'} color={'var(--primaryColor)'} iColor={'white'} />
                    </div>
                    <p className="redirectLink" onClick={() => setCurrent(6)}>Don't have an account? Sign up here</p>
                </div>
            </InnerLayout>
        </StyledLogin>
    );
}

// Created a styled login component;
const StyledLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 1px solid #ffe863;
        background: white;
        resize: none;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
        color: var(--primaryColor);
        &::placeholder {
            color: rgba(71, 41, 120, 0.8);
        }
    }
    .errorMsg {
        text-align: center;
    }
    .title {
        text-align: center;
    }
    .icon {
        max-width: 15%;
        height: auto;
        border-radius: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        top: 50px;
    }
    .logInField {
        text-align: center;
    }
    .inputEffect {
        input {
            width: 50%;
            margin: 8px 0;
            text-align: center;
        }
        select {
            color: rgba(34, 34, 96, 1);
        }
    }
    .button {
        display: flex;
        justify-content: center; /* Align button center horizontally */
        margin-top: 85px; /* Adjust top margin as needed */
    }
    .confirmButton {
        button {
            &:hover {
                background: #ffe863 !important;
            }
        }
    }
    .redirectLink {
        &:hover {
            text-decoration: underline;
        }
    }
`;

export default LogIn;
