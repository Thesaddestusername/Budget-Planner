import React, {useState, useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import { GetMainContext } from "../../context/mainContext";
import styled from "styled-components";
import Button from "../button/button";
import ChildComponent from "../childComponent/childComponent";
import { newChildSign } from "../../utils/icons";
import { InnerLayout } from "../../styles/pageLayouts";

function AddMyChild(){
    const {getChildren, userChildren, deleteChild, addChild, error, userInfo, getUserInfo, setError} = GetMainContext()
    useEffect(() =>{getChildren(); getUserInfo(); setError('')}, [])

    const[inputState, setInputState] = useState({
        email: '',
        password: ''
    })

    const {email, password} = inputState;

    const handleSubmit = async e =>{
        e.preventDefault();
        if(userInfo.email === inputState.email.toLowerCase()){
            setError("You cannot add yourself as a child");
        }
        else if(userChildren.child1){
            if(inputState.email.toLowerCase() === userChildren.child1.email){
                setError("This child is already added");
            }
            else{
                addChild(inputState);
                setError('');
                setInputState({
                    email: '',
                    password: ''
                })
            }
        }
        else if(userChildren.child2){
            if(inputState.email.toLowerCase() === userChildren.child2.email){
                setError("This child is already added");
            }
            else{
                addChild(inputState);
                setError('');
                setInputState({
                    email: '',
                    password: ''
                })
            }
        }
        else{
            addChild(inputState);
            setError('');
            setInputState({
                email: '',
                password: ''
            })
        }
    }
    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }

    //Should have made a addChildform and add that along with the child component to a addChildMainPage, but this lazy way works;
    return(
        <div>
        <InnerLayout>
            <StyledAddChild onSubmit={handleSubmit}>
                <h1 className="AddChild">Add Child</h1>
                    <h2 style={{color: 'red'}}>{error}</h2>
                    <div className="addingField">
                        <div className="inputEffect">
                            <input type="text" required value={email} name={'email'} placeholder="Enter a Valid Email Address of Your Child" onChange={handleInput('email')}/>
                        </div>
                        <div className="inputEffect">
                            <input type="password" required value={password} name={'password'} placeholder="Their Password" onChange={handleInput('password')}/>
                        </div>
                        <div className="button">
                            <Button name={" Add This Account's Information"} icon={newChildSign} buttonPad={'1rem'} buttonRadius={'10px'} buttonBackground={'white'} color={'var(--primaryColor)'} iColor={'white'}/>
                        </div>
                        
                    </div>
            </StyledAddChild>
        </InnerLayout>
        <StyledChildList>
            <InnerLayout>
                <div className="childHistory">
                    <h2 classname="AddChild">My Children</h2>
                    <div className="child">
                        {(userChildren.child1) ? <ChildComponent key={userChildren.child1._id} id={userChildren.child1._id} email={userChildren.child1.email} label="Child 1:" pipColor="#ffd93d" deleteMe={deleteChild}/> : ''}
                    </div>
                    <div className="child">
                        {(userChildren.child2) ? <ChildComponent key={userChildren.child2._id} id={userChildren.child2._id} email={userChildren.child2.email} label="Child 2:" pipColor="#ffd93d" deleteMe={deleteChild}/> : ''}
                    </div>
                </div>
            </InnerLayout>
        </StyledChildList>
        </div>
    )
}

const StyledAddChild = styled.form`
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
    .AddChild {
        text-align: center;
    }
    .button {
        width: 40%;
        margin: 8px 0;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .inputEffect{
        input{
            width: 60%;
            margin: 8px 0;
            text-align: center;
            display: block;
            margin-left: auto;
            margin-right: auto;
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
`;

const StyledChildList = styled.div`
    .child {
        display: inline-block;
        padding: 1rem 1rem;
        vertical-align: middle;
    }
        

`;
export default AddMyChild;