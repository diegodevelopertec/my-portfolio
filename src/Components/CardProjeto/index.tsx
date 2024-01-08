import { Box } from "./style"

type projetoType={
    id:number,
    name:string,
    description:string,
    link:string,
    img:string
}
type Props={
    projetos:projetoType
    
}
export default ({projetos}:Props)=>{

    return <Box key={projetos.id}>
        <div className="cx-img">
            <img src={projetos.img} alt="" />
        </div>
        <div className="cx-btn">
          <a href={projetos.link} target="_blank">
           ver na net
          </a>
        </div>
  </Box>
}