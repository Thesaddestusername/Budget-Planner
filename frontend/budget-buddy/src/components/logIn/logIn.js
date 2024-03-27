import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { GetMainContext } from "../../context/mainContext";
import styled from "styled-components";
import Button from "../button/button";
import { addSign } from "../../utils/icons";
import { InnerLayout } from "../../styles/pageLayouts";
import axios from 'axios';

function LogIn({setCurrent}){

    const[error, setError] = useState(null);

    const{getLoggedIn, setLoggedIn} = GetMainContext();

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
            const response = await axios.post("http://localhost:3003/login", inputState)
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


    return(
        <StyledLogin onSubmit={handleSubmit}>
            <InnerLayout>
                <h1 className="Buget Buddy">Budget Buddy</h1>
                <h2 style={{color: 'red'}}>{error}</h2>
                <div className="logInField">
                    <div className="inputEffect">
                        <input type="text" required value={email} name={'email'} placeholder="Username" onChange={handleInput('email')}/>
                    </div>
                    <div className="inputEffect">
                        <input type="password" required value={password} name={'password'} placeholder="Password" onChange={handleInput('password')}/>
                    </div>
                    <div>
                    <Button name={"Login"} icon={''} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'white'} color={'var(--primaryColor)'} iColor={'white'}/>
                    </div>
                    <p className="redirectLink" onClick={() => setCurrent(6)}>Don't have an account? Sign up here</p>
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
        border: 1px solid black;
        background: white;
        resize: none;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
        color: var(--primaryColor);
        &::placeholder{
            color: rgba(71,41,120, 0.8);
        }
    }
    .inputEffect{
        input{
            width: 100%;
        }
        select{
            color: rgba(34,34,96, 1)
        }
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
export default LogIn;