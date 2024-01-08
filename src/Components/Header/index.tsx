import react from "../../assets/icons/react";
import { HTMLAttributes } from "react"
import Close from "../../assets/icons/close"
import Menu from "../../assets/icons/menu"
import { useGlobalContext } from "../../context/globalContext";
import { Container } from "./style";


export interface IHeader extends HTMLAttributes<HTMLElement>{
  menuState?:boolean;
}

export default ()=>{
  const {stateMobile,handleStateMobile}=useGlobalContext()





  return <Container menuState={stateMobile}>
    <div className="logo" onClick={()=>handleStateMobile(true)}>
      <h3>
        <span>{'<'}</span><span>Diego Dutra</span><span>{'/>'}</span>
      </h3>
    </div>
    <button className="cx-menu" onClick={()=>handleStateMobile(true)} >
          <Menu />
     </button>
    <nav>
    <div className="cx-close">
    <button  onClick={()=>handleStateMobile(false)}>
              <Close />
            </button>
    </div>
        
    <div className="links">
     <a href="#sobre" onClick={()=>handleStateMobile(false)} >Sobre Mim</a>
      <a href="#servicos" onClick={()=>handleStateMobile(false)} >Hablidades</a>
      <a href="#projetos" onClick={()=>handleStateMobile(false)} >Meus Projetos</a>
    </div>
   
    </nav>
  </Container>
}