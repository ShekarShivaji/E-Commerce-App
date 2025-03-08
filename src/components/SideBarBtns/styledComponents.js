import {NavLink} from "react-router-dom"
import styled from "styled-components"


export const NavLinks = styled(NavLink)`
    position: relative;
    color: #fff;
    padding: 15px 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 2px 10px;
    border-radius: 10px;
    &:hover {
        background:rgba(255, 255, 255, 0.7);
    }
    &:active {
        background-color: #ffffff;
        color: #4297ff;
        transition:  0.4s  ;
    }
`
export const Icon = styled.div`
    margin-right: 14px;
    font-size: 20px;
`