const before = () => {
  return order.quantity * order.itmePrice -
      Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
      Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

const after = () => {
  const basePrice = order.quantity * order.itmePrice;
  const quantityDiscount = Math.max(0, order.quantity - 500)
                                  * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscount + shipping
}

class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {return this._data.quantity};
  get itemPrice() {return this._data.itemPrice};

  get price() {
    return this.basePrice() - this.quantityDiscount() + this.shipping();
  }

  quantityDiscount() {
    return Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  }

  basePrice() {
    return order.quantity * order.itmePrice;
  }

  shipping() {
    return Math.min(this.basePrice() * 0.1, 100);
  }
}
