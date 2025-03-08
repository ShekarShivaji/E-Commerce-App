import {HamWrapper, Icon} from "./styledComponents"
import { MdMenu } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";

const Hamburger = ({open , handleClick}) => {
    return (
        <HamWrapper onClick={handleClick}>
            {open ? 
                <Icon><RiMenu4Line /></Icon> :<Icon><MdMenu /></Icon> 
            }
        </HamWrapper>
    )
}

export default Hamburger