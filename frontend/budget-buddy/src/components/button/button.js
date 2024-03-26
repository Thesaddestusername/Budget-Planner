import React from 'react'
import styled from 'styled-components'

function Button({name, icon, onClick, buttonBackground, buttonRadius, textColor, buttonPad}) {
    return (
        <StyledBtn style={{ background: buttonBackground, padding: buttonPad, borderRadius: buttonRadius, textColor: textColor}} onClick={onClick}>
            {icon}
            {name}
        </StyledBtn>
    )
}

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