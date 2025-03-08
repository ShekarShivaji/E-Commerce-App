import styled from "styled-components"

export const FooterWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    -webkit-box-shadow: 0px -10px 14px -10px rgbs(0 ,0 , 0 ,0.22);
    box-shadow: 0px -10px 14px -10px rgbs(0,0,0,0.22);
`
export const Footer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    > li  {
        text-decoration: none;
        color: #fff;
        font-size: 12px ;
        &:hover {
            color: #fff;
            transition: all 0.4s ease;
        }
    }
    > i {
        font-size: 4px;
        margin: 5px 5px 0 5px;
        color: #ffffff;
    }    `

export const SubFooter = styled.div`
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    color:rgba(255, 255, 255, 0.56);
    font-size: 12px;
    user-select: none;
    cursor:  default;
`