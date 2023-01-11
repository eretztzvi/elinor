import IErrors from "../interface/errors";
import IProduct from "../interface/product";

export default class Product {
  public product: IProduct;

  public errors: IErrors = {};

  constructor(product: IProduct) {
    this.product = product
  }

  validation() {
    // Validate Title
    if (!this.product.title) {
      this.errors.title = "Title is required!";
    }
    // Validate Description
    if (!this.product.description) {
      this.errors.description = "Description is required!";
    }
    // Validate Price
    if (!this.product.price) {
      this.errors.price = "Price is required!";
    }else if (this.product.price === 0) {
      this.errors.price = "Price is has to be more than 2 Shekels!";
    }else if (this.product.price > 500) {
      this.errors.price = "Price is has to be lower than 500 Shekels!";
    }
    
    // Validate Amount
    if (this.product.amount === 0 || !this.product.amount) {
      this.errors.amount = "Amount is required!";
    }

    return this.errors;
  }
}
