// class TrackingInformation {
//   get shippingCompany() { return this._shippingCompany;}
//   set shippingCompany (value) { this._shippingCompany = value; }
//   get trackingNumber() {return this._trackingNumber;}
//   set trackingNumber (value) { this._trackingNumber = value; }
//   get display() {
//     return `${this.shippingCompany} ${this.trackingNumber}`;
//   }
// }

class Shipping {
  get trackingInfo() {
    return `${this.shippingCompany} ${this.trackingNumber}`;
  }

  get shippingCompany() { return this._shippingCompany; }
  set shippingCompany (value) { this._shippingCompany = value; }
  get trackingNumber() {return this._shippingCompany;}
  set trackingNumber (value) { this._shippingCompany = value; }
}