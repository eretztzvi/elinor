import React, { useState } from "react";
import IErrors from "../../interface/errors";
import IProduct from "../../interface/product";
import Product from "../../utils/Product";
import InputBox from "../InputBox/InputBox";

const INITIAL_PRODUCT: IProduct = {
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

const Form: React.FC<{ product?: IProduct , handleAddProduct: (product: IProduct) => void}> = ({
  product = INITIAL_PRODUCT,
  handleAddProduct
}) => {
  const [currentProduct, setProduct] = useState<IProduct>(product);

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

    // Add product to product list
    handleAddProduct(currentProduct)
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
