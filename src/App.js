import {HashRouter , Route,Routes } from "react-router-dom"
import './App.css';
import InvoiceList from "./components/InvoiceList"
import InvoiceDetail from "./components/InvoiceDetail"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm";

const App = () => (
    <HashRouter>
      <Routes>
        <Route path="/"  element={<InvoiceList />} />
        <Route path="/invoice" element={<InvoiceDetail />} />
        <Route path="/product-list"  element={<ProductList />} />
        <Route path="/product-form" element={<ProductForm />} />
      </Routes>
    </HashRouter>
    )    
  

export default App;
