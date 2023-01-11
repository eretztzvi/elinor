import React, { useState, useEffect } from "react";
import IErrors from "../../interface/errors";
import IProduct from "../../interface/product";
import Product from "../../utils/Product";
import InputBox from "../InputBox/InputBox";
import { v4 as uuidv4 } from "uuid";

const INITIAL_PRODUCT: IProduct = {
  id: "",
  title: "",
  description: "",
  price: 0,
  amount: 0,
};

enum EProduct {
  title = "title",
  description = "description",
  price = "price",
  amount = "amount",
}

const Form: React.FC<{
  product: IProduct | undefined;
  handleAddProduct: (product: IProduct) => void;
  handleEditProducts: (product: IProduct) => void;
}> = ({ product = INITIAL_PRODUCT, handleAddProduct, handleEditProducts }) => {
  
  useEffect(() => {
    console.log(product);
  }, [product]);

  const [currentProduct, setProduct] = useState<IProduct>(
    product ? product : INITIAL_PRODUCT
  );

  const [currentErrors, setCurrentErrors] = useState<IErrors>({});

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Create product instance
    const newProduct = new Product(currentProduct);

    // validation
    const validation = newProduct.validation();
    const { title, description, price, amount } = validation;

    setCurrentErrors((errors) => ({
      ...errors,
      title,
      description,
      price,
      amount,
    }));

    if (Object.keys(validation).length > 0) {
      return;
    }

    if (product.id.length > 0) {
      handleEditProducts(currentProduct);
      return;
    }

    const productToSubmit = {
      ...currentProduct,
      id: uuidv4(),
    };

    // Add product to product list
    handleAddProduct(productToSubmit);
  };

  const handleChange = (currentKey: string, value: string) => {
    setProduct((prod) => ({
      ...prod,
      [currentKey]: value,
    }));
  };

  return (
    <div className="form-container">
      <form onSubmit={submitForm}>
        <InputBox
          label="Title"
          value={currentProduct.title}
          currentKey={EProduct.title}
          handleChange={handleChange}
          error={currentErrors.title}
        />
        <InputBox
          label="Description"
          value={currentProduct.description}
          currentKey={EProduct.description}
          handleChange={handleChange}
          error={currentErrors.description}
        />
        <InputBox
          type="number"
          label="Price"
          value={currentProduct.price}
          currentKey={EProduct.price}
          handleChange={handleChange}
          error={currentErrors.price}
        />
        <InputBox
          type="number"
          label="Amout"
          value={currentProduct.amount}
          currentKey={EProduct.amount}
          handleChange={handleChange}
          error={currentErrors.amount}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
