import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { GetMainContext } from "../../context/mainContext";
import styled from "styled-components";
import Button from "../button/button";
import { addSign } from "../../utils/icons";

// Displays the income form on the incomes page; It is the portion of the page that gets income input;
function Form(){
    // gets all required functions from the mainProvider;
    const {addIncome, getIncomes} = GetMainContext();

    // Uses the useState hooks to keep track of an input state that will store all of the info required to add an income;
    const[inputState, setInputState] = useState({
        label: '',
        amount: '',
        date: '',
        type: '',
        notes: '',
    })

    // Specifies inputState fields;
    const {label, amount, date, type, notes} = inputState;

    // Handles the final submission of the income after the button component has been pressed;   
    const handleSubmit = e =>{
        e.preventDefault();
        addIncome(inputState);
        getIncomes();
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
        <StyledFrm onSubmit={handleSubmit}>
            <div className="inputEffect">
                <input type="text" required value={label} name={'label'} placeholder="Income Name" onChange={handleInput('label')}/>
            </div>
            <div className="inputEffect">
                <input type="number" required value={amount} name={'amount'} min ="0.00" step = "0.01" placeholder="Income Amount" onChange={handleInput('amount')}/>
            </div>
            <div className="inputEffect">
                <DatePicker id='date' placeholderText = 'Choose Date' required selected={date} dateFormat="dd/MM/yyyy"  onChange={(date) => {
                        setInputState({...inputState, date: date})}}/>
            </div>
            <div className="inputEffect">
                <div className="selectInputEffect">
                    {/* this is a dropdown menu for the types of incomes you can choose; IMPORTANT: the values must be the same in income component to properly display correct icon; */}
                    <select required value={type} name="type" id="type" placeholder="Choose Type" onChange={handleInput('type')}>
                        <option value="" disabled>Choose Type</option>
                        <option value="salary">Salary</option>
                        <option value="bank">Bank</option>
                        <option value="gift">Gift</option>
                        <option value="refund">Refund</option>
                        <option value="stocks">Stocks</option>
                        <option value="crypto">Crypto</option>
                        <option value="nft">NFT</option>
                        <option value="sale">Item Sold</option>
                        <option value="liquidation">Liquidation</option>
                        <option value="misc">Other</option>
                    </select>
                </div>
            </div>
                <div className="inputEffect">
                    <textarea type="text" required value={notes} name={'notes'} placeholder="- Notes" id = "notes" cols="15" rows="3" onChange={handleInput('notes')}/> 
                </div>
                <div className="confirmButton">
                    <Button name={"Add This Income"} icon={addSign} buttonPad={'0.9 1.9rem'} buttonRadius={'10px'} buttonBackground={'#CDEAC0'} textColor={'white'}/>
                </div>
        </StyledFrm>
    )
}

// Created a form styled component;
const StyledFrm = styled.form`
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
        border: 2px solid #CDEAC0;
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
                background: green !important;
            }
        }
    }





`;
export default Form;