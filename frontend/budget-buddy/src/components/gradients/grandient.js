import {React} from "react";
import styled from "styled-components";

// Creates a gradient at the corner of the screen;
function Gradient(){


    const StyledGradient = styled.div`
    width: 600px;
    height: 600px;
    position: fixed;
    margin-left: -300px;
    margin-top: -300px;
    background-color: #F5BD1f;
    filter: blur(400px);
    `;

    return(
        <StyledGradient>
        </StyledGradient>
    )
}
export default Gradient;