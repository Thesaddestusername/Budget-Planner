import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { GetMainContext } from "../../context/mainContext";
import styled from "styled-components";
import Button from "../button/button";
import { addSign } from "../../utils/icons";

// Displays the expense form on the incomes page; It is the portion of the page that gets expense input;
function Form2(){
    // gets all required functions from the mainProvider;
    const {addExpense, getExpenses} = GetMainContext();

    // Uses the useState hooks to keep track of an input state that will store all of the info required to add an expense;
    const[inputState, setInputState] = useState({
        label: '',
        amount: '',
        date: '',
        type: '',
        notes: '',
    })

    // Specifies inputState fields;
    const {label, amount, date, type, notes} = inputState;

    
    // Handles the final submission of the expense after the button component has been pressed;   
    const handleSubmit = e =>{
        e.preventDefault();
        addExpense(inputState);
        getExpenses();
        setInputState({
            label: '',
            amount: '',
            date: '',
            type: '',
            notes: '',
        })
    }

    // Handle input is called when the fields onChange is triggered. This sets the input from the input field into a flattened input state using the setInputState hook;
    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }

    // HTML that renders form on incomes page; there are pseudo validaiton on the input fields that require them to have some form of input as well as some min max criteria for the number;
    return(
        <StyledFrm2 onSubmit={handleSubmit}>
            <div className="inputEffect">
                <input type="text" required value={label} name={'label'} placeholder="Expense Name" onChange={handleInput('label')}/>
            </div>
            <div className="inputEffect">
                <input type="number" required value={amount} name={'amount'} min ="0.00" step = "0.01" placeholder="Expense Amount" onChange={handleInput('amount')}/>
            </div>
            <div className="inputEffect">
                <DatePicker id='date' placeholderText = 'Choose Date' required selected={date} dateFormat="dd/MM/yyyy"  onChange={(date) => {
                        setInputState({...inputState, date: date})}}/>
            </div>
            <div className="inputEffect">
                <div className="selectInputEffect">
                    {/* this is a dropdown menu for the types of expenses you can choose; IMPORTANT: the values must be the same in expense component to properly display correct icon; */}
                    <select required value={type} name="type" id="type" placeholder="Choose Type" onChange={handleInput('type')}>
                        <option value="" disabled>Choose Type</option>
                        <option value="fast food">Fast Food</option>
                        <option value="groceries">Groceries</option>
                        <option value="gas">Gas</option>
                        <option value="health">Health</option>
                        <option value="online purchase">Online Purchase</option>
                        <option value="membership">membership</option>
                        <option value="school/education">School/Education</option>
                        <option value="travel">Travel</option>
                        <option value="misc.">Misc.</option>
                    </select>
                </div>
            </div>
                <div className="inputEffect">
                    <textarea type="text" required value={notes} name={'notes'} placeholder="- Notes" id = "notes" cols="15" rows="3" onChange={handleInput('notes')}/> 
                </div>
                <div className="confirmButton">
                    <Button name={"Add This Expense"} icon={addSign} buttonPad={'0.9 1.9rem'} buttonRadius={'10px'} buttonBackground={'#FF928B'} textColor={'white'}/>
                </div>
        </StyledFrm2>
    )
}

// Created a styled form component;
const StyledFrm2 = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        //border: 1px solid #ffe863;
        border: 2px solid #FF928B;
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
            width: auto;
        }
        select{
            color: rgba(34,34,96, 1)
        }
    }
    .confirmButton{
        button{
            &:hover{
                background: red !important;
            }
        }
    }





`;
export default Form2;