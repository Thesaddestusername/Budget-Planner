import {React} from "react";
import styled, { keyframes } from "styled-components";

function Gradient(){

    const moveGradient = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: (400px, 500px);
        }
        100%{
            transform: translate(0,0);
        }

    `;

    const StyledGradient = styled.div`
    width: 600px;
    height: 600px;
    position: fixed;
    margin-left: -300px;
    margin-top: -300px;
    background-color: #F5BD1f;
    filter: blur(400px);
    animation: ${moveGradient} 15s alternate linear infinite;
    `;

    return(
        <StyledGradient>
        </StyledGradient>
    )
}
export default Gradient;