import styled from "styled-components";
import { OutterLayout } from "./styles/pageLayouts";
import Navigation from "./components/navigation/navigation";
import React, {useState} from "react";
import Dashboard from "./components/dashboard/dashboard";
import Incomes from "./components/incomes/incomes";
import Expenses from "./components/expenses/expenses";
import { MainTheme } from "./styles/MainTheme";
import LogOut from "./components/logOut/logOut";
import LogIn from "./components/logIn/logIn";
import SignUp from "./components/signup/signup";
import AddChild from "./components/addChild/addChild";

function App() {
  const [current, setCurrent] = useState(5);

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
      return <AddChild/>;
    }
  }

  return (
      <StyledDiv className="App">
        <MainTheme/>
        <OutterLayout>
        {(current != 5 && current != 6) ? <Navigation current={current} setCurrent={setCurrent}/> : ''}  
            <main>
              {showInfo()}
            </main>
        </OutterLayout>
      </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vw;
  background-color: #AEC6CF; /*dear god this is background color for back page*/
  main{
    height: 49vw;
    flex: 1;
    background: pink; /*background color for the tab*/
    border: 2px solid black;
    backdrop-filter: blur(3px);
    border-radius: 64px;
    overflow: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      width: 0px;
    }
  }
`;

export default App;
