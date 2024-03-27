import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { GetMainContext } from "../../context/mainContext";
import styled from "styled-components";
import Button from "../button/button";
import { InnerLayout } from "../../styles/pageLayouts";
import axios from 'axios';
import profilePic from "../../images/budgetBuddyIcon.png"

function SignUp({setCurrent}){

    const[error, setError] = useState(null);

    const{setLoggedIn, getLoggedIn} = GetMainContext();

    const[inputState, setInputState] = useState({
        email: '',
        password: ''
    })

    const {email, password} = inputState;

    const handleSubmit = async e =>{
        e.preventDefault();
        console.log("submitted")
        //This is where we would put the validate or login function from mainContext
        try{
            const response = await axios.post("http://localhost:3003/signup", inputState)
            setLoggedIn(true);
        }
        catch(err){
            setError(err.response.data.message);
            setLoggedIn(false);
        }  
        if(getLoggedIn()){
            setCurrent(3);
        }
        setInputState({
        email: '',
        password: ''
        })
    }
    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }

    console.log(error);

    return(
        <StyledLogin onSubmit={handleSubmit}>
            <InnerLayout>
                <h1 className="title">Budget Buddy SignUp</h1>
                <img className="icon" src={profilePic} alt=""/>
                <h2 className="errorMsg" style={{color: '#FF928B'}}>{error}</h2>
                <div className="logInField">
                    <div className="inputEffect">
                        <input type="text" required value={email} name={'email'} placeholder="Enter a Valid Email Address" onChange={handleInput('email')}/>
                    </div>
                    <div className="inputEffect">
                        <input type="password" required value={password} name={'password'} placeholder="Password" onChange={handleInput('password')}/>
                    </div>
                    <div className="button">
                        <Button name={"Sign Up"} icon={''} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'white'} color={'var(--primaryColor)'} iColor={'white'}/>
                    </div>
                    <p className="redirectLink" onClick={() => setCurrent(5)}>Already have an account? Go back to login page</p>
                </div>
                </InnerLayout>   
        </StyledLogin>
    )
}

const StyledLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    input, textarea, select{
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
        color: var(-primaryColor);
        &::placeholder{
            color: rgba(71,41,120, 0.8);
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
        margin-left:auto;
        margin-right: auto;
        top: 50px;
    }
    .logInField {
        text-align: center;
    }
    .inputEffect{
        input{
            width: 50%;
            margin: 8px 0;
            text-align: center;
        }
        select{
            color: rgba(34,34,96, 1)
        }
    }
    .button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin: 50px auto;
        width: 10%;

    }
    .confirmButton{
        button{
            &:hover{
                background: #ffe863 !important;
            }
        }
    }
    .redirectLink{
        &:hover {
            text-decoration: underline;
        }
    }

`;

export default SignUp;