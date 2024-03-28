import {createGlobalStyle} from 'styled-components';

//Created a mainThem global style which takes care of font PROVIDED BY FONT AWESOME and other global stylings; 
export const MainTheme = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    :root{
        --primaryColor: #472978  //dark purple (icons, text)
        --primaryColor2: #5D2689 //another dark purple?
        //--primaryColor3: #EADFB4
        //--primaryColor3: #8736AA //background of inside bubbles
        primaryColor3: #FEC3A6
        --secondaryColor: #F58D1F //orange
        --secondaryColor2: #ffd93d //yellow (borders)
        --secondaryColor3: #FFE863 //light yellow
        --boxShadow: 0px 2px 16px rgba(0, 0, 0, 0.25)
    }
    body{
        font-family: "Besley", serif;
        color: rgb(34,34,96); //dark blue
        font-size: clamp(0.5rem, 2.5vw, 1.5rem);
        overflow: hidden;
    }
    h1, h2, h3, h4, h5{
        color: rgb(34,34,96); //dark blue
    }
`;