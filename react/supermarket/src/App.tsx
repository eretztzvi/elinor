import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import ProductList from "./Components/ProductList/ProductList";
import IProduct from "./interface/product";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [currentProductId, setCurrentProductId] = useState<string>("");

  const handleAddProduct = (product: IProduct) => {
    const temporaryData = [...products];
    temporaryData.push(product);
    setProducts(temporaryData);
  };

  const handleSetCurrentProductId = (id: string) => {
    setCurrentProductId(id);
  };

  const handleDeleteOneProduct = (id: string) => {
    const temporaryData = [...products]
    const findIndex = temporaryData.findIndex(product => product.id === id)
    temporaryData.splice(findIndex, 1)
    setProducts(temporaryData)
  }

  return (
    <div className="App">
      <div className="form-box">
        <h3>Product form</h3>
        <br />
        <Form handleAddProduct={handleAddProduct} />
      </div>
      <div className="products-box">
        <h3>Products list</h3>
        <ProductList
          products={products}
          handleSetCurrentProductId={handleSetCurrentProductId}
          currentProductId={currentProductId}
          handleDeleteOneProduct={handleDeleteOneProduct}
        />
      </div>
    </div>
  );
}

export default App;
