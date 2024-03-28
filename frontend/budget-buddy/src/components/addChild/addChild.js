import React, {useState, useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import { GetMainContext } from "../../context/mainContext";
import styled from "styled-components";
import Button from "../button/button";
import ChildComponent from "../childComponent/childComponent";
import { newChildSign } from "../../utils/icons";
import { InnerLayout } from "../../styles/pageLayouts";

// Is the page that will allow the user to add children to an account if they are not children themselves;
function AddMyChild(){
    // gets all required functions and data arrays from the mainProvider;
    const {getChildren, userChildren, deleteChild, addChild, error, userInfo, getUserInfo, setError} = GetMainContext()
    // Gets children, user info, and also set error to an empty string on load;
    useEffect(() =>{getChildren(); getUserInfo(); setError('')}, [])

    // Uses the useState hooks to keep track of an input state that will store all of the info required to add a child;
    const[inputState, setInputState] = useState({
        email: '',
        password: ''
    })

    //Specifies inputState fields;
    const {email, password} = inputState;

    //Handles the final submission of the addChild data when my button component is pressed. Does some error checking and then adds the child if it can;
    const handleSubmit = async e =>{
        //prevetns defautl event submission
        e.preventDefault();
        // Checks if the user is trying to add himself;
        if(userInfo.email === inputState.email.toLowerCase()){
            setError("You cannot add yourself as a child");
        }
        // checks if child1 exists and is trying to be added again;
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
        // checks if child1 exists and is trying to be added again;
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
        // Otherwise add the child;
        else{
            addChild(inputState);
            setError('');
            setInputState({
                email: '',
                password: ''
            })
        }
    }
    // Handle input is called when the fields onChange is triggered. This sets the input from the input field into a flattened input state using the setInputState hook;
    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }

    //Should have made a addChildform and add that along with the child component to a addChildMainPage, but this lazy way works;
    // HTML that includes a user made button component as well as child components; It is what will be displayed/rendered;
    return(
        <div>
        <InnerLayout>
            <StyledAddChild onSubmit={handleSubmit}>
                <h1 className="AddChild">Add Child</h1>
                    {/* displays error being passed in from main context; */}
                    <h2 style={{color: 'red'}}>{error}</h2>
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
        <StyledChildList>
            <InnerLayout>
                <div>
                    {/* Displays the child component if it exists and changes the color and '-' or '+' depending on if it is an income or expense; */}
                    {(userChildren.child1) ? <ChildComponent key={userChildren.child1._id} id={userChildren.child1._id} email={userChildren.child1.email} label="Child 1:" pipColor="#ffd93d" deleteMe={deleteChild}/> : ''}
                    {(userChildren.child2) ? <ChildComponent key={userChildren.child2._id} id={userChildren.child2._id} email={userChildren.child2.email} label="Child 2:" pipColor="#ffd93d" deleteMe={deleteChild}/> : ''}
                </div>
            </InnerLayout>
        </StyledChildList>
        </div>
    )
}

// created a style for the addChild page;
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
`;

const StyledChildList = styled.div`

`;
export default AddMyChild;