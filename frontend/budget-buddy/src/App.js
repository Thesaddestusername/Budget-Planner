import styled from "styled-components";
import { OutterLayout } from "./styles/pageLayouts";
import Gradient from "./components/gradients/grandient"
import Navigation from "./components/navigation/navigation";
import React, {useState} from "react";
import Dashboard from "./components/dashboard/dashboard";
import Incomes from "./components/incomes/incomes";
import Expenses from "./components/expenses/expenses";
import { GetMainContext } from "./context/mainContext";

function App() {
  const [current, setCurrent] = useState(1);

  const mainCont = GetMainContext();
  console.log(mainCont);

  const showInfo = () =>{
    if(current === 1){
      return <Dashboard/>;
    }
    else if(current === 2){
      return <Dashboard/>;
    }
    else if(current === 3){
      return <Incomes/>
    }
    else if(current === 4){
      return <Expenses/>;
    }
    else{
      return <Dashboard/>;
    }
  }

  return (
    <StyledDiv className="App">
      <Gradient></Gradient>
      <OutterLayout>
        <Navigation current={current} setCurrent={setCurrent}/>
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
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
