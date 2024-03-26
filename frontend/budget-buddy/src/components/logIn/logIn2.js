import React, {useState} from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import Button from "../button/button";
import { noSign, yesSign } from "../../utils/icons";

function LogIn({setCurrent}){

    const[inputState, setInputState] = useState({
        username: '',
        password: '',
    })

    const {username, password} = inputState;

    const handleSubmit = e =>{
        console.log("clicked")
        /// This will be login(inputState) or validate(inputState) something like that function
        setInputState({
            username: '',
            password: '',
        })
    }
    const handleInput = name => e =>{
        console.log(e.target.value);
        setInputState({...inputState, [name]: e.target.value})
    }

    return(
        <StyledLogin>
            <InnerLayout onSubmit={handleSubmit}>
                <h1 className="Buget Buddy">Budget Buddy</h1>
                <div className="logInField">
                    <div className="inputEffect">
                        <input type="text" required value={username} name={'username'} placeholder="Username" onChange={handleInput('username')}/>
                    </div>
                    <div className="inputEffect">
                        <input type="password" required value={password} name={'password'} placeholder="Password" onChange={handleInput('password')}/>
                    </div>
                    <div>
                    <Button name={"Login"} icon={''} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'white'} color={'var(--primaryColor)'} iColor={'white'}/>
                    </div>
                    <p onClick={() => setCurrent(3)}>Don't have an account? Sign up here</p>
                </div>
            </InnerLayout>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
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

export default LogIn;
