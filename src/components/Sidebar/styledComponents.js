import styled from "styled-components"

export const SideBarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    display: block;
    z-index: 2;
    transition: transform 0.3s ease-in-out;
    @media (max-width: 775px){
      transform: ${({open}) => (open ? "translatex(0%)" : "translatex(-102%)")}
    }
  `
export const SideBarBody = styled.div`
  background: linear-gradient(0deg, #3358f4, #1d8cf8);
  height: 100vh;
  overflow: hidden;
  @media (max-width: 775px){
    box-shadow: 0 16px 38px -12px rgba(0 , 0 , 0 , 0.56),
      0 4px 25px 0 rgba(0 , 0 , 0 , 0.12) , 0 8px 10px -5px rgba(0 , 0 , 0 , 0.2)
  }
`
export const UnorderList = styled.ul`
  position: relative:
  list-style: none;
  padding: 0;
  display: block;
  transition: all 0.5s ease;
`
export const NegativeSidebar = styled.div`
  z-index: 2;
  position: fixed;
  left: 0 ;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: auto;
  opacity: ${({open}) => (open ? "1" : "0")};
  transition: opacity 224ms cubic-bezier(0.4 , 0 , 0.2 , 1) 0ms;
  @media (max-width: 775px){
    pointer-events: ${({open}) => (open ? "auto" : "none")}
    background-color: rgba(0 , 0 , 0 , 0.5);
  }
    @media (min-width: 775px){
      background-color: none;
      pointer-events: none;
    }

`