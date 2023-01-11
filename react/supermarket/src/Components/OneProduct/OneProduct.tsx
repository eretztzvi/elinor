import IProduct from "../../interface/product";
import "./OneProduct.css";

const OneProduct: React.FC<{
  product: IProduct;
  handleSetCurrentProductId: (id: string) => void;
  currentProductId: string;
  handleDeleteOneProduct: (id: string) => void;
}> = ({
  product,
  handleSetCurrentProductId,
  currentProductId,
  handleDeleteOneProduct,
}) => {
  return (
    <div
      className="one-product"
      onMouseEnter={() => handleSetCurrentProductId(product.id)}
      onMouseLeave={() => handleSetCurrentProductId("")}
    >
      {currentProductId === product.id && (
        <div>
          <button>Edit</button>
          <button onClick={() => handleDeleteOneProduct(product.id)}>
            Delete
          </button>
        </div>
      )}
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.amount}</p>
    </div>
  );
};

export default OneProduct;
