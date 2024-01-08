import { styled } from "styled-components";
import { globalStyle } from "../../globalstyle";


export const Page=styled.div`

h3{
    font-size: 43px;
}
`


export const ContainerSobre=styled.section`
padding:190px 100px;
padding-bottom: 40px;
background:linear-gradient( to bottom,${globalStyle.bgAppSecondary},${globalStyle.bgApp});
.content{
    display: flex;
    height: 700px;
    .left{
        width: 50%;
        h2{
            color: white;
            font-size: 32px;

        }
        p{
            margin: 20px 0;
            font-size: 22px;
            font-weight: 500;
            color: ${globalStyle.colors};
        }
    }
    .right{
        flex: 1;
        padding:0 20px;
          img{
            height:550px;
            border-radius: 100%;
            box-shadow: 0 0 22px ${globalStyle.bgApp};
          }
        
   
    }
}

@media screen and (max-width:950px){
    padding:30px 0px;
    height: auto;
    padding-top: 90px;
   
    .content{
        height: auto;
     flex-direction: column;
     .left{
        width: 100%;
        padding: 12px;
        margin: 20px 0;
        margin-bottom: 50px;
     }

     .right{
        padding: 0 10px;
        height: auto;
            img{
              width: 100%;
              height: 100%;
            
            }
       }
     
    }

}
`

export const ContainerServicos=styled.section`
background:linear-gradient( to bottom ,${globalStyle.bgApp},#222);
padding: 180px 100px;
padding-top: 12px;
.content{
    display: flex;
    align-items: center;
    
   .left{
        width: 40%;

        h3{
            font-size: 32px;
            margin-bottom:90px;
            color: white;
        }
       ul{
            li{
                display: flex;
                align-items: center;
                font-size: 20px;
                color: white;
                margin: 22px 0;
                .svg{
                    height: 45px;
                    width: 55px;
                    fill: ${globalStyle.bgAppSecondary};
               }
            }
       }
    }
   .right{
    flex: 1;
    display: flex;
    justify-content: center;
    div{
        img{
        height: 750px;
       
       }
    }
   }
}


@media screen and (max-width:790px) {
    padding: 40px;
    margin: 0;
    .content{
        padding: 0;
        flex-direction: column;
      .left{
        width: 100%;
        h3{
            text-align: center;
          font-size:32px;
        }
      }
        .right{
            display: flex;
            img{
                height: 390px;
                width: 100%;
            }
        }
    }
}
`

export const ContainerTechs=styled.section`

.content{
    padding: 100px 20px;
    display: flex;
    flex-direction: column;
    h3{
        font-size: 32px;
        align-self: center;
        color: white;
    }

    .projetos-box{
        margin: 100px 10px;
        display: grid;
        gap: 30px;
        justify-items: center;
        grid-template-columns: repeat(3,1fr);
      padding: auto 100px;
        .svg{
            height: 134px;
            width: 134px;
            margin: 30px 0;
            fill:${globalStyle.bgApp}
        }
       
    }
}

@media screen and (max-width:790px){
    margin: 0px 10px;

    .content{
        padding: 50px 10px;
        h3{
            font-size: 32px;
            text-align: center;
        }
        .projetos-box{
            grid-template-columns: repeat(2,1fr);
       }
    }
}
`

export const ContainerProjetos=styled.section`
background:linear-gradient( to bottom ,${globalStyle.bgAppSecondary},#222);
padding: 50px 90px;

h3{
    align-self: center;
    font-size: 32px;
    color: white;
}
.cx-depoiments{
    margin: 100px 0;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3,1fr);

    
}

@media screen  and (max-width:750px){
    padding: 50px 12px;
    h3{
        font-size: 32px;
        text-align: center;
    }
    .cx-depoiments{
        display: flex;
        flex-direction: column;
    }
}
`

export const ContainerPerguntas=styled.section`
padding: 100px;

.content{
    .header-title{
        display: flex;
        margin: 30px;
        align-items: center;
        h3{
        font-size: 32px;
        color: white;
    }
    span{
        background-color:${globalStyle.bgAppSecondary};
        height: 55px;
        width: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        margin-right: 20px;
        .svg{
            height: 35px;
            fill:${globalStyle.bgApp};
        }
    }
    }
}

@media screen and (max-width:950px){
    padding:50px 10px;
    .content{
       .header-title{
            h3{
                text-align:start;
                font-size: 22px;
            }
       }
    }

}
`

export const ContainerCertificados=styled.section`
display: flex;
flex-direction: column;
justify-content: center;
h3{
    text-align: center;
    margin: 40px 0;
    color: ${globalStyle.bgAppSecondary};
}
.certificados-box{
    display: grid;
    justify-items: center;
    padding: 90px 20px;
    flex-wrap: wrap;
    grid-template-columns: repeat(3,1fr);
    img{
        margin: 12px;
        height: 250px;
        background-color: red;
    }
}

@media screen and (max-width:950px) {
    .certificados-box{
        padding: 90px 12px;
        display: flex;
        align-items: center;
        flex-direction: column;
        img{
            margin: 12px 0;
        }
    }
}
`