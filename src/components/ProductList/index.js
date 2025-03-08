import "./productList.css"
import { Component } from "react"
import {Link} from "react-router-dom"
import ProductDetail from "../ProductDetail/index.js"
import Sidebar from "../Sidebar/index.js"
import Hamburger from "../Hamburger";

class ProductList extends Component {
    state = {
        prodectListData: [],
        searchInput: "",
        open: true,
         
    }

    componentDidMount() {
        const details = localStorage.getItem("productsList")
        const parsedData = JSON.parse(details)
        this.setState({prodectListData : parsedData})
    }

    getProductsItems = () => {
        const {prodectListData} = this.state
        return (
            <ul  style={{width: "100%"}}>{prodectListData.map((item , id) => <ProductDetail deleteProduct={this.deleteProduct} key={item.id} itemNo={id + 1} item={item} />)}</ul>
        )
    }

    onchangeSearchValue = event => {
        this.setState({searchInput : event.target.value})
    }

    getSearchedData = () => {
        const {prodectListData,searchInput} = this.state 
        const filteredData = prodectListData.filter((items) => items.productBrand.toLowerCase().includes(searchInput.toLowerCase()) )
        this.setState({
            prodectListData: filteredData
        })
    }

    deleteProduct = id => {
        const {prodectListData} = this.state
        const filterData = prodectListData.filter(items => items.id !== id)
        localStorage.removeItem("productsList")
        localStorage.setItem("productsList" , JSON.stringify(filterData))
        this.setState({prodectListData: JSON.parse(localStorage.getItem("productsList"))})
      }
     
         handleClick = () => {
             this.setState(prevState => ({
                open : !prevState.open
             }))
        }

        setOpen = () => {
            this.setState(prevState => ({
                open : !prevState.open
             })) 
        }
    
    render() {
        const {searchInput, open } = this.state
        return (
            <div className="background-container">
                <Hamburger open={open} handleClick={this.handleClick} />
                <Sidebar handleClick={this.handleClick} setOpen={this.setOpen} open={open} />
                <div className="invoice-list-body">
                    <h1 className="heading">Products</h1>
                    <div className="container">
                        <Link to="/product-form">
                            <button type="button" className="create-button">Create Product</button>
                        </Link>
                        <div>
                            <input type="text" value={searchInput} onChange={this.onchangeSearchValue} className="input" />
                            <button type="button" onClick={this.getSearchedData} className="search-button">Search</button>
                        </div>
                    </div>
                    <div className="product-list-container">
                        <div id="columns-row" className="displayInfoHeadings">
                            <span id="column-name">id</span>
                            <span id="column-name">Store Name</span>
                            <span id="column-name">Product Brand</span>
                            <span id="column-name" >Product description</span>
                            <span id="column-name" >Price</span>
                            <span id="column-name">Created At</span>
                            <span id="action">Action</span>
                        </div>
                        <hr style={{width: "100%"}} />
                        {this.getProductsItems()}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ProductList