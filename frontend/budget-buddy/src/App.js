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
      return <AddMyChild/>;
    }
  }

  return (
      <StyledDiv className="App">
        <MainTheme/>
        <Gradient></Gradient>
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
  background-color: purple;
  main{
    height: 49vw;
    flex: 1;
    background: rgba(135, 54, 170, 0.8);
    border: 2px solid #ffe863;
    backdrop-filter: blur(3px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
