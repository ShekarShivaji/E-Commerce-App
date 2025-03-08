import "./index.css"
import React, { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import Sidebar from "../Sidebar/index.js"
import Hamburger from "../Hamburger/index.js";
import InvoiceItem from "../InvoiceItem/index.js"

const InvoiceDetail = () => {
    const [open , setOpen] = useState()
    const [orderId , setOrderId] = useState(0) 
    const [productName, setProductName] = useState("")
    const [quantity, setQuntity] = useState()
    const [tax , setTax] = useState()
    const [regularPrice , setRegularPrice] = useState() 
    const [dealPrice , setDealPrice] = useState()
    const [customerName , setCustomerName] = useState("")
    const [address, setAddress] = useState("")
    const [number , setNumber] = useState("")
    const [gmail , setGamil] = useState("")

    const getLocalyUpdatedData = () => {
        let stringifiedList = localStorage.getItem("productDetails");
        let parsedList = JSON.parse(stringifiedList);
        if (parsedList === null) {
            return [];
        } else {
            return parsedList;
        }
    }
     
    const productDetails = getLocalyUpdatedData()
    
    const onChangeOrderId = event => {
        setOrderId(event.target.value)
    }
    const onChangeProductName = event => {
        setProductName(event.target.value)
    }
    const onChangeQuantity = event => {
        setQuntity(event.target.value)
    }
    const onChangeTax = event => {
        setTax(event.target.value)
    }
    const onChangeRegularPrice = event => {
        setRegularPrice(event.target.value)
    }
    const onChangeDealPrice = event => {
        setDealPrice(event.target.value)
    }

    const onChangeCustomerName = event => {
        setCustomerName(event.target.value)
    }
    const onChangeAddress = event => {
        setAddress(event.target.value)
    }
    const onChangeNumber = event => {
        setNumber(event.target.value)
    }
    const onChangeGamil = event => {
        setGamil(event.target.value)
    }
         
    const addProductRow = (event) => {
        event.preventDefault()
        
        const eachProductDetails = {
            invoiceId: uuidv4(),
            orderId ,
            productName ,
            quantity ,
            tax,
            regularPrice ,
            dealPrice ,
            customerName ,
            address ,
            number ,
            gmail 
        }
        productDetails.push(eachProductDetails)
        localStorage.setItem("productDetails" , JSON.stringify(productDetails))
        setOrderId("")
        setProductName("")
        setQuntity("")
        setRegularPrice("")
        setTax("")
        setDealPrice("")
    }

    const getProductsItems = () => {
        const details = localStorage.getItem("productDetails")
        const parsedData = JSON.parse(details)
        console.log(parsedData)
        return (
            <ul  style={{width: "95%"}}>{parsedData !== null ? <>{parsedData.map((item) => <InvoiceItem key={item.orderId} item={item} />)}</> : <></>}</ul>
        )
    }
    
    const handleClick = () => {
            setOpen(!open)
        }
    const details = localStorage.getItem("companyDetails")
    const parrsedDetails = JSON.parse(details)

    return (
        <div className="bg-container">
            <Hamburger open={open} handleClick={handleClick} />
            <Sidebar handleClick={handleClick} setOpen={setOpen} open={open} />
            <div className="invoice-body">
                <h1 className="new-heading">New Invoice</h1>
                <div className="image">
                    <div className="details">
                        <h3>{parrsedDetails.CompanyName !== null ? parrsedDetails.CompanyName : ""}</h3>
                        <p>{parrsedDetails.Address !== null ? parrsedDetails.Address : ""}</p>
                        <p>{parrsedDetails.Number !== null ? parrsedDetails.Number : ""}</p>
                        <p>{parrsedDetails.Gmail !== null ? parrsedDetails.Gmail : ""}</p>
                    </div>
                    <h1 style={{color: "#fff"}}>Invoice</h1>
                </div>
                <div className="billing-details-container">
                    <div className="billing-inputs-conatainer">
                        <h4 style={{fontWeight: "700"}}>Billing To</h4>
                        <input id="customerName" onChange={onChangeCustomerName} value={customerName} placeholder="Customer Name" type="text" className="input" />
                        <input id="address" onChange={onChangeAddress} value={address} placeholder="Address" type="text" className="input" />
                        <input id="number" onChange={onChangeNumber} value={number} type="text" placeholder="Number" className="input" />
                        <input id="gmail" onChange={onChangeGamil} value={gmail} type="text" placeholder="Gmail" className="input" />
                    </div>
                    <div>
                        <p style={{fontWeight: "700"}}>Creation Date</p>
                        <input id="date" type="date"  className="input" />
                    </div>
                </div>
                <div className="Invoice-list-items-container">
                    <div id="columns-row" className="displayInfoHeadings">
                        <span id="column-name">Order ID</span>
                        <span id="column-name">Products</span>
                        <span id="column-name" >Quantity</span>
                        <span id="column-name" >Tax</span>
                        <span id="column-name">Regular Price</span>
                        <span id="column-name">Deal Price</span>
                        <span id="column-name">Item Total</span>
                        <span id="action">Action</span>
                    </div>
                    <hr className="underLine" />
                    {getProductsItems()}
                </div>
                <form className="invoice-list-items-input-container">
                    <div className="inputs-row">
                        <span id="orderId" ><input value={orderId} onChange={onChangeOrderId} className="input-fileds" type="number" /></span>
                        <span id="product"><input value={productName} onChange={onChangeProductName} className="input-fileds" type="text" /></span>
                        <span id="quantity"><input value={quantity} onChange={onChangeQuantity} className="input-fileds" type="number" /></span>
                        <span id="tax"><input value={tax} onChange={onChangeTax} className="input-fileds" type="number" /></span>
                        <span id="regularPrice"><input onChange={onChangeRegularPrice} value={regularPrice} className="input-fileds" type="number" /></span>
                        <span id="dealPrice"><input value={dealPrice} onChange={onChangeDealPrice} className="input-fileds" type="number" /></span>
                    </div>
                    <button onClick={addProductRow} type="submit" className="add-button">Add</button>
                </form>
                
            </div>
        </div>
    )
}

export default InvoiceDetail