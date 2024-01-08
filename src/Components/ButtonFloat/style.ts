import styled from "styled-components";
import { globalStyle } from "../../globalstyle";


export const Box=styled.button`
width: 65px;
height: 65px;
padding: 10px;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:#0F2167;
position: fixed;
box-shadow: 0 0 11px #000;
top: 80vh;
right: 3vw;
cursor: pointer;
border: none;
border-radius: 100%;
padding: 5px;

.svg{
   height: 55px;
   width: 55px;
}

&:hover{
    outline: 2px solid ${globalStyle.bgAppSecondary};
}

@media screen and (max-width:950px){
    height: 45px;
    width: 45px;
    .svg{
        height: 25px;
        width: 25px;
} 
}

`