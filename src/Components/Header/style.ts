import { styled } from "styled-components";
import { globalStyle } from "../../globalstyle";
import { IHeader } from ".";



export const Container=styled.header<IHeader>`
background-color: ${globalStyle.bgApp};
box-shadow: 0 0 12px #222;
padding:28px 32px;
display: flex;
justify-content: space-between;
align-items: center;
height: 90px;
.logo{
    text-align: justify;
    display: flex;
    justify-content: center;
    align-items: center;
 
 span{
    color: ${globalStyle.bgAppSecondary};
    font-size: 32px;
    margin: 0 9px;
    &:nth-child(1){
        color: #3B3486;
        font-weight: 600;
    }
    &:nth-child(3){
        color: #3B3486;
        font-weight: 600;
    }
 }


}


.cx-menu{
    display: none;
}
nav{
    .cx-close{
        display: none;
    }
}

.links{
    display: flex;
    align-items:center;
        a{
        color: #fff;
        margin: 10px;
        padding: 12px 20px;
        transition: all ease .3s;
        &:hover{
            background-color:${globalStyle.bgAppSecondary};
            border-radius: 23px;
            color:${globalStyle.bgApp};
            
        }
    }
}



@media screen and (max-width:950px){
padding: 12px 6px;


.logo{
  img{
    height: 70px;
   span{
    font-size: 16px;
    
   }
  }
}

.cx-menu{
    display: ${props=>props.menuState ? 'none' : 'flex'};
    height: 55px;
    width: 55px;
    border: none;
    padding: 0;
    border-radius: 4px;
    .svg{
        height: 100%;
    }
}
    nav{
        display: ${props=>props.menuState ? 'flex' : 'hidden'};
        width: ${props=>props.menuState ? '60vw' : '0'};
        transition: all ease .2s;
        flex-direction: column;
        position: fixed;
        right: 0;
        z-index: 1;
        top: 0;
        bottom: 0;
        background-color: ${globalStyle.bgApp};
        box-shadow: 12px solid #222;

        .cx-close{
            display: ${props=>props.menuState ? 'flex' : 'none'};
            justify-content: end;
            padding: 17px 12px;
            background-color: ${globalStyle.bgAppSecondary};
            button{
                background-color: ${globalStyle.bgApp};
                align-self: flex-end;
                border-radius: 4px;
                border: 0;
                padding: 12px;
                height: 55px;
                width: 55px;
            }
               
           
        }
        .links{
            display: ${props=>props.menuState ? 'flex' : 'none'};
            margin: 90px 0;
            flex-direction: column;
            a{
                display: ${props=>props.menuState ? 'flex' : 'none'};
                margin: 0;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding:15px;
                border-bottom:2px solid #aaa;
                &:nth-child(1){
                    border-top:2px solid #aaa;
                }
                &:hover{
                    border-radius: 0;
                }
            }
        }
    }
}
`