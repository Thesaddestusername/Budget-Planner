import React from 'react'
import styled from 'styled-components'

// User made button that takes in parameters for its style and IMPORTANT NOTE: it takes in a onclick parameter as well so you can pass in funcitons from main context to execute on click;
function Button({name, icon, onClick, buttonBackground, buttonRadius, textColor, buttonPad}) {
    return (
        <StyledBtn style={{ background: buttonBackground, padding: buttonPad, borderRadius: buttonRadius, textColor: textColor}} onClick={onClick}>
            {icon}
            {name}
        </StyledBtn>
    )
}

// Creates a styled component for the button;
const StyledBtn= styled.button`
    padding: 10px;
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .1rem;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
`;


export default Button