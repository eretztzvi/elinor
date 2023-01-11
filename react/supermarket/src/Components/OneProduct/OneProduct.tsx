import IProduct from "../../interface/product";
import './OneProduct.css'

const OneProduct: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="one-product">
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.amount}</p>
    </div>
  );
};

export default OneProduct;
