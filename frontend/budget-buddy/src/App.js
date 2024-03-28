import styled from "styled-components";
import { OutterLayout } from "./styles/pageLayouts";
import Gradient from "./components/gradients/grandient"
import Navigation from "./components/navigation/navigation";
import React, {useState} from "react";
import Dashboard from "./components/dashboard/dashboard";
import Incomes from "./components/incomes/incomes";
import Expenses from "./components/expenses/expenses";
import { MainTheme } from "./styles/MainTheme";
import LogOut from "./components/logOut/logOut";
import LogIn from "./components/logIn/logIn";
import SignUp from "./components/signup/signup";
import AddMyChild from "./components/addChild/addChild";

// Is the page that is technically always displayed deciding which component is being shown; Pages like Incomes are full pages made into components;
function App() {
  //creates a react hook for the current page and setsthe base to login page;
  const [current, setCurrent] = useState(5);

  //Show info is a helper function that will decide which component to show depending on curret react hook;
  const showInfo = () =>{
    if(current === 1){
      return <Incomes/>;
    }
    else if(current === 2){
      return <Expenses/>;
    }
    else if(current === 3){
      return <Dashboard/>
    }
    else if(current === 4){
      return <LogOut setCurrent={setCurrent}/>;
    }
    else if(current === 5){
      return <LogIn setCurrent={setCurrent}/>
    }
    else if(current === 6){
      return <SignUp setCurrent={setCurrent}/>;
    }
    else if(current === 7){
      return <AddMyChild/>;
    }
  }

  // Displays information with globalTheme main theme and outter layout, but the information within the inner layour is bases on the show info helper function;
  return (
      <StyledDiv className="App">
        <MainTheme/>
        <Gradient></Gradient>
        <OutterLayout>
          {/* if the current page is login or signup do not show navigation sidebar */}
        {(current != 5 && current != 6) ? <Navigation current={current} setCurrent={setCurrent}/> : ''}  
            <main>
              {showInfo()}
            </main>
        </OutterLayout>
      </StyledDiv>
  );
}


// Created a style component for main;
const StyledDiv = styled.div`
  height: 100vw;
  background-color: #FEC3A6;
  main{
    height: 49vw;
    flex: 1;
    //background: rgba(135, 54, 170, 0.8);
    background: #A7C7E7;
    border: 2px solid #EFE9AE;
    backdrop-filter: blur(3px);
    border-radius: 64px;
    overflow-x: hidden;
    scrollbar-width: none; 
    &::-webkit-scrollbar{
      width: 0;
      background: transparent;
    }
  }
`;

export default App;
