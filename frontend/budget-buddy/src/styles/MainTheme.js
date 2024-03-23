import {createGlobalStyle} from 'styled-components';

export const MainTheme = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    :root{
        --primaryColor: #472978
        --primaryColor2: #5D2689
        --primaryColor3: #8736AA
        --secondaryColor: #F58D1F
        --secondaryColor2: #ffd93d
        --secondaryColor3: #FFE863
    }
    body{
        font-family: "Besley", serif;
        color: rgb(34,34,96);
        font-size: clamp(0.5rem, 2.5vw, 1.5rem);
        overflow: hidden;
    }
`;