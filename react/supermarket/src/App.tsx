import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import ProductList from "./Components/ProductList/ProductList";
import IProduct from "./interface/product";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [currentProductId, setCurrentProductId] = useState<string>("");

  const [currentEdit, setCurrentEdit] = useState<IProduct | undefined>(
    undefined
  );

  const handleAddProduct = (product: IProduct) => {
    const temporaryData = [...products];
    temporaryData.push(product);
    setProducts(temporaryData);
  };

  const handleEditProducts = (product: IProduct) => {
    const temporaryData = [...products];
    const findIndex = temporaryData.findIndex((p) => p.id === product.id);
    temporaryData[findIndex] = product;
    setProducts(temporaryData);
  };

  const handleSetCurrentProductId = (id: string) => {
    setCurrentProductId(id);
  };

  const handleDeleteOneProduct = (id: string) => {
    const temporaryData = [...products];
    const findIndex = temporaryData.findIndex((product) => product.id === id);
    temporaryData.splice(findIndex, 1);
    setProducts(temporaryData);
  };

  const handleEditProduct = () => {
    const temporaryData = [...products];
    const product = temporaryData.find(
      (product) => product.id === currentProductId
    );
    setCurrentEdit(product);
  };

  return (
    <div className="App">
      <div className="form-box">
        <h3>Product form</h3>
        <br />
        <Form
          product={currentEdit} // undfined | product
          handleAddProduct={handleAddProduct}
          handleEditProducts={handleEditProducts}
          setCurrentProductId={setCurrentProductId}
          setCurrentEdit={setCurrentEdit}
        />
      </div>
      <div className="products-box">
        <h3>Products list</h3>
        <ProductList
          products={products}
          handleSetCurrentProductId={handleSetCurrentProductId}
          currentProductId={currentProductId}
          handleDeleteOneProduct={handleDeleteOneProduct}
          handleEditProduct={handleEditProduct}
        />
      </div>
    </div>
  );
}

export default App;
