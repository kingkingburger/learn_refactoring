class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    const discountFactor = this.getDiscountFactor();
    return this.getBasePrice() * discountFactor;
  }

  getDiscountFactor() {
    let discountFactor = 0.98;
    if (this.getBasePrice() > 1000) {
      discountFactor -= 0.03;
    }
    return discountFactor;
  }

  getBasePrice() {
    return this._quantity * this._item.price;
  }
}