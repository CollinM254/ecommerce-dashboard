// This is a class to be used in shopping cart.
export default class CartItem {
  constructor(product, quantity, color, size) {
    this.product = product;
    this.quantity = quantity;
    this.color = color;
    this.size = size;
  }
}
