import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { GetMainContext } from "../../context/mainContext";
import styled from "styled-components";

function Form(){
    const {addIncome} = GetMainContext();
    const[inputState, setInputState] = useState({
        label: '',
        amount: '',
        date: '',
        type: '',
        notes: '',
    })

    const {label, amount, date, type, notes} = inputState;

    const handleSubmit = e =>{
        e.preventDefault();
        addIncome(inputState);
    }
    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }


    return(
        <StyledFrm onSubmit={handleSubmit}>
            <div className="inputEffect">
                <input type="text" required value={label} name={'label'} placeholder="Salary Label" onChange={handleInput('label')}/>
            </div>
            <div className="inputEffect">
                <input type="text" required value={amount} name={'amount'} placeholder="Salary Amount" onChange={handleInput('amount')}/>
            </div>
            <div className="inputEffect">
                <DatePicker id='date' placeholderText = 'Choose Date' required selected={date} dateFormat="dd/MM//yyy" onChange={(date) => {setInputState({...inputState, date: date})}}/>
            </div>
            <div className="inputEffect">
                <div className="selectInputEffect">
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
                    </select>
                </div>
            </div>
                <div className="inputEffect">
                    <textarea type="text" required value={notes} name={'notes'} placeholder="- Notes" id = "notes" cols="15" rows="3" onChange={handleInput('notes')}/> 
                </div>
                <div className="confirmButton">
                    <button>Add This Income</button>
                </div>
        </StyledFrm>
    )
}

const StyledFrm = styled.form`
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
        background: transparent;
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
export default Form;