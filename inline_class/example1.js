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

// 이건 그래도 어떤 클래스를 옮겨야 하는지 명확한 기준이 있다.
// 더 이상 제 역할을 못해서 그대로 두면 안되는 클래스를 타겟으로 잡는다.
// 예전에는 유용했을 코드가 존재한다. 코드가 살아있다는 증거이다.