import React, { useState, useEffect } from "react";
import IErrors from "../../interface/errors";
import IProduct from "../../interface/product";
import Product from "../../utils/Product";
import InputBox from "../InputBox/InputBox";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

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

const KEYS = Object.values(EProduct);

const Form: React.FC<{
  product: IProduct | undefined;
  handleAddProduct: (product: IProduct) => void;
  handleEditProducts: (product: IProduct) => void;
  setCurrentProductId: (id: string) => void;
  setCurrentEdit: (product: IProduct | undefined) => void;
}> = ({
  product = INITIAL_PRODUCT,
  handleAddProduct,
  handleEditProducts,
  setCurrentEdit,
}) => {
  useEffect(() => {
    console.log(product);
    console.log(KEYS);
    setProduct(product);
  }, [product]);

  const [currentProduct, setProduct] = useState<IProduct>(
    product ? product : INITIAL_PRODUCT
  );

  const [currentErrors, setCurrentErrors] = useState<IErrors>({});

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(currentProduct);
    console.log(product);

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
    } else {
      const productToSubmit = {
        ...currentProduct,
        id: uuidv4(),
      };

      // Add product to product list
      handleAddProduct(productToSubmit);
    }

    setCurrentEdit(undefined);
    setProduct(INITIAL_PRODUCT);
  };

  const handleChange = (currentKey: string, value: string) => {
    setProduct((prod) => ({
      ...prod,
      [currentKey]: value,
    }));
  };

  return (
    <div className={product.id ? "form-container-edit-mode" : "form-container"}>
      {product.id && <h4>Edit Mode</h4>}
      <form onSubmit={submitForm}>
        {KEYS.map((currentKey, index) => (
          <InputBox
          key={index}
            label={currentKey}
            value={currentProduct[currentKey]}
            currentKey={currentKey}
            handleChange={handleChange}
            error={currentErrors[currentKey]}
          />
        ))}
        <button type="submit">
          {product.id ? "Save Changes" : "Submit Product"}
        </button>
      </form>
    </div>
  );
};

export default Form;
