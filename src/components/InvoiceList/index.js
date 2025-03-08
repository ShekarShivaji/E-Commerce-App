import "./index.css"
import React, { useState } from "react"
import {Link} from "react-router-dom"
import { IoDocumentTextOutline } from "react-icons/io5";
import Sidebar from "../Sidebar/index.js"
import Hamburger from "../Hamburger";
import Dashboard from "../Dashboard/index.js";
import InvoiceListItems from "../InvoiceListItems/index.js"
import CompanyDetails from "../CompanyDetails/index.js"

const InvoiceList = () =>   {
    const [open , setOpen] = useState()
     


    const handleClick = () => {
        setOpen(!open)
    }

     

     

        return( 
        <div className="bg-container">
            <Hamburger open={open} handleClick={handleClick} />
            <Sidebar handleClick={handleClick} setOpen={setOpen} open={open} />
            <div className="invoice-list-body">
                <h1 className="dashboard-heading">Dashboard</h1>
                <Dashboard />
                <InvoiceListItems />
            </div>
            <div className="quick-edit-containers">
                <Link to="/invoice">
                    <button className="button"><IoDocumentTextOutline size="20"/> Add New Invoice</button>
                </Link> 
                <CompanyDetails />
            </div>
        </div>)
    
}

export default InvoiceList