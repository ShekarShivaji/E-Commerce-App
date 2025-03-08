import {SideBarWrapper,NegativeSidebar, SideBarBody,UnorderList} from "./styledComponents"
import { IoMdHome } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import React ,{useLayoutEffect} from "react"
import SideBarBtns from "../SideBarBtns"
import SideBarFooter from "../SideBarFooter"

const makeButtons = [
    {
        to: "/",
        icon: <IoMdHome />,
        title: "Dashboard"
    },
    {
        to: "/invoice",
        icon: <IoDocumentTextOutline />,
        title: "Invoices"
    },
    {
        to: "/product-list",
        icon: <AiFillProduct />,
        title: "Product List"
    }
]

const Sidebar = ({open ,setOpen, handleClick}) => {
     
    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth > 775){
                if (open === true){
                    setOpen(false)
                }
            }
        }
        window.addEventListener("resize" , updateSize);
        updateSize();
        return () => window.removeEventListener("resize" , updateSize)
    }, [open ,setOpen ]);
    return (
    <div>
        <NegativeSidebar open={open} onClick={handleClick} />
        <SideBarWrapper open={open}>
            <SideBarBody open={open}>
                 
                    <UnorderList>
                    {makeButtons.map((btn, i) => {
                    return <SideBarBtns 
                            to={btn.to}  
                            icon={btn.icon} 
                            title={btn.title} 
                            key={i}
                            handleClick={handleClick} 
                        />
                    })}
                    </UnorderList>
                 
                <SideBarFooter />
            </SideBarBody>
        </SideBarWrapper>
    </div>
    )
}

export default Sidebar