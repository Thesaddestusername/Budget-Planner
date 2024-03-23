import React from "react";
import styled from "styled-components";
import profilePic from "../../images/blankProfilePic.png"
import { dropDownItems } from "../../utils/dropDownItems";

function Navigation({current, setCurrent}){
    return(
        <StyledNav>
            <div className="userDiv">
                <img src={profilePic} alt=""/>
                <div className="username">
                    <h2>USERNAME</h2>
                    <p>BALANCE</p>
                </div>
                <ul className="dropDownItems">
                    {dropDownItems.map((item)=>{
                        return <li key = {item.id} onClick={() => setCurrent(item.id)} className={current === item.id ? 'current': ''}>{item.icon}<span>{item.title}</span></li>
                    }
                    )}
                </ul>
                <div className="bottomNav">
                    <li>
                    </li>
                </div>    
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    padding: 2rem 1.5rem;
    width: 300px;
    height: 49dvw;
    background-color: rgba(135, 54, 170, 0.8);
    border: 2px solid #ffe863;
    backdrop-filter: blur(3px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    userDiv{
        //height: 100px;
        //display: flex;
        //align-items: center;
        //gap: 0.5rem;
        img{

            object-fit: cover;
            align-items: center;
        }
    }

    .dropDownItems{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 35px auto;
            align-items: center;
            margin: 0.7rem 0;
            padding-left: 1rem;
            position: relative;
        }
    }

    .current{
        color: rgba(255,217,61, 0.9) !important;
        i{
            color: rgba(255,217,61, 0.9) !important; 
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 10px;
            height: 25%;
            background: rgba(255,217,61, 0.9);
            border-radius: 10px 10px 10px 10px;
        }
    }
`;

export default Navigation;