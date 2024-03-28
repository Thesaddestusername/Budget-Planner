import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { GetMainContext } from "../../context/mainContext";
import styled from "styled-components";
import Button from "../button/button";
import { InnerLayout } from "../../styles/pageLayouts";
import axios from 'axios';
import profilePic from "../../images/budgetBuddyIconFixedUp.png"

function SignUp({setCurrent}){

  const[error, setError] = useState(null);

  const [passwordMismatchError, setPasswordMismatchError] = useState(null);

  const { setLoggedIn, getLoggedIn } = GetMainContext();

  const [inputState, setInputState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = inputState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMismatchError("Passwords do not match");
      return;
    }

    setPasswordMismatchError(null);

    try {
      const response = await axios.post("http://localhost:3003/signup", inputState);
      setLoggedIn(true);
      setCurrent(3);
    } catch (err) {
      setError(err.response.data.message);
      setLoggedIn(false);
    }

    setInputState({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  console.log(error);

  return (
    <StyledLogin onSubmit={handleSubmit}>
      <InnerLayout>
        <h1 className="title">Budget Buddy SignUp</h1>
        <img className="icon" src={profilePic} alt="" />
        <h2 className="errorMsg" style={{ color: "#FF928B" }}>
          {error}
        </h2>
        <div className="logInField">
          <div className="inputEffect">
            <input
              type="text"
              required
              value={email}
              name={"email"}
              placeholder="Enter a Valid Email Address"
              onChange={handleInput("email")}
            />
          </div>
          <div className="inputEffect">
            <input
              type="password"
              required
              value={password}
              name={"password"}
              placeholder="Password"
              onChange={handleInput("password")}
            />
          </div>
          <div className="inputEffect">
            <input
              type="password"
              required
              value={confirmPassword}
              name={"confirmPassword"}
              placeholder="Confirm Password"
              onChange={handleInput("confirmPassword")}
            />
          </div>
          {passwordMismatchError && <p className="errorText">{passwordMismatchError}</p>}
          <div className="button">
            <Button
              name={"Sign Up"}
              icon={""}
              buttonPad={"1rem"}
              buttonRadius={"10px"}
              buttonBackground={"white"}
              color={"var(--primaryColor)"}
              iColor={"white"}
            />
          </div>
          <p className="redirectLink" onClick={() => setCurrent(5)}>
            Already have an account? Go back to login page
          </p>
        </div>
      </InnerLayout>
    </StyledLogin>
  );
}

const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

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

  .inputEffect input {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #ffe863;
    background: white;
    resize: none;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
    color: var(--primaryColor);
    width: 50%;
    margin: 8px 0;
    text-align: center;

    &::placeholder {
      color: rgba(71, 41, 120, 0.8);
    }
  }

  .button {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .redirectLink{
    &:hover {
        text-decoration: underline;
    }

  .errorText {
    color: red;
    text-align: center;
  }
}
`;

export default SignUp;
