import {useState} from "react"
import {FooterWrapper, Footer,SubFooter} from "./styledComponents"

const SideBarFooter = () => {
    const today = new Date();
    const [year] = useState(today.getFullYear())

    return (
        <FooterWrapper>
            <Footer>
                <li>About us</li>
                <i className="fa-solid fa-circle"></i>
                <li>Contact us</li>
                <i className="fa-solid fa-circle"></i>
                <li>Legal</li>
                <i className="fa-solid fa-circle"></i>
                <SubFooter>© 2020-{year}, all rights reserved</SubFooter>
            </Footer>
        </FooterWrapper>
    )
}

export default SideBarFooter