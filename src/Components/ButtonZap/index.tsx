import { Box } from "./style";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Zap from "../../assets/icons/zap";


export default ()=>{



    return <Box  href='' target="_blank" 
    data-tooltip-id="my-tooltip-zap"
    data-tooltip-content="chama no whatss"
    data-tooltip-place="left"
    
    >
       <Zap />

       <Tooltip id="my-tooltip-zap"  />
    </Box>
}