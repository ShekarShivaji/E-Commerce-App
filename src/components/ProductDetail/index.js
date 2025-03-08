import "./productList.css"

const ProductDetail = (props) => {
    const {item,itemNo,deleteProduct} = props
    const {createAt ,
        price ,
        productBrand ,
        productDes,
        storeName,
        id
     } = item

    const onClickDeleteBtn = () => {
        deleteProduct(id)
    }
     
    return (
        <li className="product-Items-rows">
            <span id="orderId" >{itemNo}</span>
            <span id="storeName">{storeName}</span>
            <span id="productBrand">{productBrand}</span>
            <span id="price">{productDes}</span>
            <span id="regularPrice">{price}</span>
            <span id="createAt">{createAt}</span>
            <span id="action"><button className="editBtn">Edit</button><button className="dltBtn" onClick={onClickDeleteBtn}>Delete</button></span>
        </li>
    )
}

export default ProductDetail