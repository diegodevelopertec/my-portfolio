import Insta from "../../assets/icons/insta"
import Zap from "../../assets/icons/zap"
import Zap2 from "../../assets/icons/zap2"
import {Box} from "./style"
import ArrowIcon  from "../../assets/icons/arrow"
import Github from "../../assets/icons/github"


export default ()=>{
    return <Box>
       <div className="content">
        <div className="about">
            <h3><ArrowIcon />  Sobre Nós</h3>
                <p>Somos uma empresa dedicada á ajudar o seu negócio a ter presença online.
                    Desde o design até a disponibilização do seu app ou site na internet nós cuidamos disso pra 
                    você!
                </p>
            </div>
            <div className="links">
                <h3><ArrowIcon /> Entre em contato comigo </h3>
                <a target="_blank" href="https://github.com/diegodevelopertec?tab=repositories">
                    <Github />
                    <span>Me encontre no Github</span>
                </a>
                <a href="https://abre.ai/hQWd" target="_blank" >
                    <Zap2 />
                    <span>Me chame  no Whatssap</span>
                </a>
            </div>  
        </div>   
        <div className="divider"> </div>
        <div className="line">
            <p>Desenvolvido de ❤️ para você</p>
            <p>São Paulo - SP</p>
            <p>Todos os direitos reservados</p>
        </div>
    </Box>
}