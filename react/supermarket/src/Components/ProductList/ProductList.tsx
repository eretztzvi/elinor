import IProduct from "../../interface/product";
import OneProduct from "../OneProduct/OneProduct";
import "./ProductList.css";

const ProductList: React.FC<{
  products: IProduct[];
  handleSetCurrentProductId: (id: string) => void;
  currentProductId: string;
  handleDeleteOneProduct: (id: string) => void;
}> = ({
  products,
  handleSetCurrentProductId,
  currentProductId,
  handleDeleteOneProduct,
}) => {
  return (
    <>
      {products.length === 0 && <p>Currently no products availbale</p>}
      <div className="product-list-container">
        {products.length > 0 &&
          products.map((product, index) => (
            <OneProduct
              key={index}
              product={product}
              handleSetCurrentProductId={handleSetCurrentProductId}
              currentProductId={currentProductId}
              handleDeleteOneProduct={handleDeleteOneProduct}
            />
          ))}
      </div>
    </>
  );
};

export default ProductList;
