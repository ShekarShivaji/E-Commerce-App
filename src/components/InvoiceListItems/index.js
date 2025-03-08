import "./index.css"

const InvoiceListItems = () => {
    const getCustmerDetails = JSON.parse(localStorage.getItem("productDetails"))
    const getCompanyDetails = JSON.parse(localStorage.getItem("companyDetails"))
    
    let companyName = ""

    if (getCompanyDetails !== null){
        const {CompanyName} = getCompanyDetails
        companyName = CompanyName
    } 
     
    return (
    <div className="Invoice-list-item-container">
        <div id="columns-row" className="displayInfoHeadings">
            <span id="column-name">Order ID</span>
            <span id="column-name">Client Name</span>
            <span id="column-name">Store Name</span>
            <span id="column-name" >Quantity</span>
            <span id="column-name">Regular Price</span>
            <span id="column-name">Deal Price</span>
            <span id="column-name">Item Total</span>
        </div>
        <hr className="underLine" />
        <ul style={{width: "100%",marginLeft: "-30px"}}>
            {getCustmerDetails !== null ? <>{getCustmerDetails.map(item => {
                const total = item.dealPrice * item.quantity
               return (
               <li className="row" key={item.id}>
                    <span id="orderId" >{item.orderId}</span>
                    <span id="clientName">{item.customerName}</span>
                    <span id="storeName">{companyName}</span>
                    <span id="quantity">{item.quantity}</span>
                    <span id="regularPrice">{item.regularPrice}</span>
                    <span id="dealPrice">{item.dealPrice}</span>
                    <span id="itemTotal">{total}</span>
                </li>)
            })}</> : <></>}
            
        </ul>
         
    </div>
    )
}

export default InvoiceListItems