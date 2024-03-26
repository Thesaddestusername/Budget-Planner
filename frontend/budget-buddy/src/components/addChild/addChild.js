import React, {useState} from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/pageLayouts";
import Button from "../button/button";
import {newChildSign } from "../../utils/icons";

function AddChild(){

    const[inputState, setInputState] = useState({
        email: '',
        password: ''
    })


    const {email, password} = inputState;

    const handleSubmit = async e =>{
        e.preventDefault();
        console.log("submitted")
        //This is where we would put the addChildStuff;
        setInputState({
        email: '',
        password: ''
        })
    }
    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }

    return(
        <InnerLayout>
            <StyledAddChild>
                <h1 className="AddChild">Add Child</h1>
                    <h2 style={{color: 'red'}}></h2>
                    <div className="addingField">
                        <div className="inputEffect">
                            <input type="text" required value={email} name={'email'} placeholder="Enter a Valid Email Address of Your Child" onChange={handleInput('email')}/>
                        </div>
                        <div className="inputEffect">
                            <input type="password" required value={password} name={'password'} placeholder="Their Password" onChange={handleInput('password')}/>
                        </div>
                        <div>
                        <Button name={" Add This Account's Information"} icon={newChildSign} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'white'} color={'var(--primaryColor)'} iColor={'white'}/>
                        </div>
                    </div>
            </StyledAddChild>
        </InnerLayout>
    )
}

const StyledAddChild = styled.div`
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

export default AddChild;