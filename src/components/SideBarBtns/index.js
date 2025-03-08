import {NavLinks, Icon} from "./styledComponents"

const SideBarBtns = ({to,icon,title}) => {
    return (
        <li>
            <NavLinks strict="true" to={{pathname: to}}>
                <Icon>
                     {icon} 
                </Icon>
                {title}
            </NavLinks>
        </li>
    )
}

export default SideBarBtns