import styled from "styled-components";
import { OutterLayout } from "./styles/pageLayouts";
import Gradient from "./components/gradients/grandient"
import Navigation from "./components/navigation/navigation";
import React, {useState} from "react";

function App() {
  const [current, setCurrent] = useState(1);
  return (
    <StyledDiv className="App">
      <Gradient></Gradient>
      <OutterLayout>
        <Navigation current={current} setCurrent={setCurrent}/>
      </OutterLayout>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vw;
  background-color: purple;
`;

export default App;
