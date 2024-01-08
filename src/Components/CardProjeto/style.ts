import styled from "styled-components";
import { globalStyle } from "../../globalstyle";


export const Box=styled.div`
height: auto;
padding: 22px;
border-radius: 4px;
width: auto;
border-top-left-radius:20px;
border-top-right-radius:20px;


&:hover{
    background: linear-gradient(to bottom,${globalStyle.bgApp},#222);
  
}
.cx-img{
    width: 100%;
    img{
        width: 100%;
        height: 300px;
        border-radius: 12px;
        box-shadow:0 0 12px #222;
    }
}

p{
    margin: 20px 9px;
    background-color:#F1EFEF;
    padding: 20px 12px;
    color: #7D7C7C;
    text-align: justify;
    font-weight: 500;
    border-radius: 8px;
}


.cx-btn{
    display: flex;
    margin: 30px 0;
    justify-content: center;
    a{
    padding:22px  12px;
    height: 35px;
    width: 50%;
    border-radius: 12px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    background-color: #279EFF;
    color: white;
    transition: all ease .2s;
    &:hover{
        box-shadow: 0 0 12px ${globalStyle.bgAppSecondary};
        background-color: ${globalStyle.bgApp};
        color: ${globalStyle.bgAppSecondary};
        outline: 3px solid ${globalStyle.bgAppSecondary};
    }
}
}
`