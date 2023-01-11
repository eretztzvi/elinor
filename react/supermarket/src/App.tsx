import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import ProductList from "./Components/ProductList/ProductList";
import IProduct from './interface/product'

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  const handleAddProduct = (product: IProduct) => {
    const temporaryData = [...products]
    temporaryData.push(product)
    setProducts(temporaryData)
  }

  return (
    <div className="App">
      <div className="form-box">
        <h3>Product form</h3>
        <br />
        <Form handleAddProduct={handleAddProduct}/>
      </div>
      <div className="products-box">
        <h3>Products list</h3>
        <ProductList products={products}/>
      </div>
    </div>
  );
}

export default App;
