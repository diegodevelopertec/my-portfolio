import {  animateScroll as scroll } from "react-scroll";
import { Box } from "./style";
import Top from "../../assets/icons/top";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

export default ()=>{
    const ClickScrollTop=()=>{
        scroll.scrollToTop(
           { duration: 500, // Ajuste a duração conforme necessário
           smooth: 'easeInOutQuad'}
        ); 
      }

    return <Box onClick={ClickScrollTop}
    data-tooltip-id="my-tooltip"
    data-tooltip-content="Ir pro topo da página"
    data-tooltip-place="left"
    
    >
       <Top />

       <Tooltip id="my-tooltip"  />
    </Box>
}