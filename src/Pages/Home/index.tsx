import { ContainerProjetos,ContainerServicos, ContainerSobre, ContainerTechs, Page } from "./style"
import Arrow from ".././../assets/icons/arrow"
import Question from ".././../assets/icons/question"
import { useEffect } from "react"
import depoiments from "../../data/depoiments"
import bannerImgs from "../../data/bannerImgs"
import ButtonFloat from "../../Components/ButtonFloat"
import ButtonZap from "../../Components/ButtonZap"
import CardProjeto from "../../Components/CardProjeto"
import { projetos } from "../../data/projetos"
import Javascript from "../../assets/icons/javascript"
import Css from "../../assets/icons/css"
import Html from "../../assets/icons/html"
import Mysql from "../../assets/icons/mysql"
import Node from "../../assets/icons/node"
import React from "../../assets/icons/react"
import Python from "../../assets/icons/python"
import Typescript from "../../assets/icons/typescript"


export default ()=>{

    
   
    return <Page>
    <ContainerSobre id="sobre">
        <div className="content box-about">
            <div className="left">
                <h2>Hello Friends 😄👋 </h2>
                <p>Meu nome é Diego e sou Desenvolvedor web e tenho mais de 2 anos de experiência!<br></br>
                Sou um cara que gosta de estar sem aprendendo algo e ajudando outros á também aprender Tecnologia e Desenvolvimento.
                Gosto de Ler,jogar videogames e estudar muito
                </p>
            </div>
            <div className="right">
              <img src="/eu.jpg" alt="" />
            </div>
        </div>
    </ContainerSobre>
    <ContainerServicos id="servicos">
        <div className="content box-services">
            <div className="left">
                <h3>Habilidades</h3>
                <ul>
                    <li><Arrow />Criação de Front-ends com React e Next JS</li>
                    <li><Arrow />Criação de Apis rest com Express e Next JS </li>
                    <li><Arrow />Modelagem de Banco de Dados </li>
             
                    
                </ul>
            </div>

            <div className="right">
                <div>
                <img src="/bpy.png" alt="" />
                </div>
              
            </div>
        </div>
    </ContainerServicos>
    <ContainerTechs id="projetos">
        <div className="content box-projects">
            <h3>Tecnologias</h3>
            <div className="projetos-box">
             <Javascript />
             <Typescript />
             <Css />
             <Html />
             <Mysql />
             <Node/>
             <React />
             <Python />
            </div>
        </div>
    </ContainerTechs>
    <ContainerProjetos id="depoimentos">
        <div className="content box-depoiments">
            <h3>Meus Projetos</h3>
            <div className="cx-depoiments">
              {
                projetos.map((i,k)=>(
                    <CardProjeto projetos={i} key={k} />
                ))
              }
            </div>
        </div>
    </ContainerProjetos>
    <ButtonZap />
    <ButtonFloat />
    </Page>
}