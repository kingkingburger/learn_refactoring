class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() { return this._name; }
  set name (value) { this._name = value; }
  get telephoneNumber() { return `${this._telephoneNumber.officeAreaCode} ${this._telephoneNumber.officeNumber}`; }
  get officeAreaCode() {return this._telephoneNumber._officeAreaCode; }
  set officeAreaCode (value) { this._telephoneNumber._officeAreaCode = value; }
  get officeNumber() {return this._telephoneNumber._officeNumber;}
  set officeNumber (value) { this._telephoneNumber._officeNumber = value; }
}

class TelephoneNumber {
  get telephoneNumber() { return `${this.areaCode} ${this.number}`; }
  get areaCode() {return this._areaCode; }
  set areaCode (value) { this._areaCode = value; }
  get number() {return this._number;}
  set number (value) { this._number = value; }
}

// 클래스를 어떻게 뽑느냐는 쉽다.
// 어떤 클래스에서 어떤 계념을 뽑아야 하는지 판단하는 것이 어려운 것이다.
// 책에는 그런 내용이 안나와있긴하다.