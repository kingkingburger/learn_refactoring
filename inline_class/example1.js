class TrackingInformation {
  get shippingCompany() { return this._shippingCompany;}
  set shippingCompany (value) { this._shippingCompany = value; }
  get trackingNumber() {return this._trackingNumber;}
  set trackingNumber (value) { this._trackingNumber = value; }
  get display() {
    return `${this.shippingCompany} ${this.trackingNumber}`;
  }
}

class Shipping {
  get trackingInfo() {
    return this._trackingInfomation.display;
  }
  get trackingInformation() {return this._trackingInfomation}
  set trackingInformation (value) { this._trackingInfomation = value; }
}