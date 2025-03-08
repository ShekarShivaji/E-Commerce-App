import "./index.css"

const InvoiceItem = (props) => {
    const {item} = props
    const {orderId ,
        productName ,
        quantity ,
        tax,
        regularPrice ,
        dealPrice } = item
    const itemsTotal = quantity * dealPrice
    return (
        <li className="invoice-Items-rows">
            <span id="orderId" >{orderId}</span>
            <span id="productName">{productName}</span>
            <span id="quantity">{quantity}</span>
            <span id="tax">%{tax}</span>
            <span id="regularPrice">{regularPrice}</span>
            <span id="dealPrice">{dealPrice}</span>
            <span id="itemTotal">{itemsTotal}</span>
            <span id="action"><button className="editButton">Edit</button><button className="dltButton">Delete</button></span>
        </li>
    )
}

export default InvoiceItem 