import IProduct from "../../interface/product";
import OneProduct from "../OneProduct/OneProduct";
import './ProductList.css'

const ProductList: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <>
      {products.length === 0 && <p>Currently no products availbale</p>}
      <div className="product-list-container">
        {products.length > 0 &&
          products.map((product, index) => (
            <OneProduct key={index} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
