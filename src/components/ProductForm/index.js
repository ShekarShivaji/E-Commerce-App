import "./productList.css"
import {v4 as uuidv4} from 'uuid'

const ProductForm = (props) => {

    const getLocalyUpdatedData = () => {
        let stringifiedList = localStorage.getItem("productsList");
        let parsedList = JSON.parse(stringifiedList);
        if (parsedList === null) {
            return [];
        } else {
            return parsedList;
        }
    }
     
    const productsList = getLocalyUpdatedData()

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem("productsList" , JSON.stringify(productsList))
        const formData = new FormData(event.target )
        const product = Object.fromEntries(formData.entries())
        product.id = uuidv4()

        if (!product.storeName || !product.productBrand || !product.productDes ||
             !product.price  || !product.createAt ) {
                alert("Please fill all the fields")
                return 
        }else {
            productsList.push(product)
            localStorage.setItem("productsList" , JSON.stringify(productsList))
        }
        window.location.replace("/product-list")
         
    }

    return (
        <div className="bg-container-productForm">
            <form className="create-container" onSubmit={handleSubmit}>
                <h1 className="text">Create Product</h1>
                <div className="input-container">
                    <label htmlFor="storeName" className="text">Store Name : </label>
                    <input id="storeName" type="text" className="inputs" name="storeName" />
                </div>
                <div className="input-container">
                    <label htmlFor="productBrand" className="text ">Product Brand : </label>
                    <input id="productBrand" type="text" className="inputs" name="productBrand" />
                </div>
                <div className="input-container">
                    <label htmlFor="porductDes" className="text">Product description : </label>
                    <textarea id="productDes"   rows="4"  className="textarea" name="productDes" />
                </div>
                <div className="input-container">
                    <label htmlFor="price" className="text">Price : </label>
                    <input id="price" type="text" className="inputs" name="price" />
                </div>
                <div className="input-container">
                    <label htmlFor="createAt" className="text">Created At : </label>
                    <input id="createAt" type="text" className="inputs" name="createAt" />
                </div>
                    <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm