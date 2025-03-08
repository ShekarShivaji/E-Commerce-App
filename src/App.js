import {BrowserRouter , Route,Routes } from "react-router-dom"
import './App.css';
import InvoiceList from "./components/InvoiceList"
import InvoiceDetail from "./components/InvoiceDetail"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm";

<<<<<<< HEAD
const App = () => ( 
    <BrowserRouter>
=======
const App = () => (
    <HashRouter>
>>>>>>> 8bc52e63376dfc7383c66cbde7bc7b3f69516bf4
      <Routes>
        <Route path="/"  element={<InvoiceList />} />
        <Route path="/invoice" element={<InvoiceDetail />} />
        <Route path="/product-list"  element={<ProductList />} />
        <Route path="/product-form" element={<ProductForm />} />
      </Routes>
<<<<<<< HEAD
    </BrowserRouter>
      
)    
     
=======
    </HashRouter>
    )    
>>>>>>> 8bc52e63376dfc7383c66cbde7bc7b3f69516bf4
  

export default App;
