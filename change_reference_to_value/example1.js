class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {return this._telephoneNumber.code;}
  set officeAreaCode(officeAreaCode) {this._telephoneNumber.code = officeAreaCode;}
  get officeNumber() {return this._telephoneNumber.officeNumber;}
  set officeNumber(officeNumber) {this._telephoneNumber.officeNumber = officeNumber;}
}

class TelephoneNumber {
  constructor(areaCode, number) {
    this._telephoneNumber = areaCode;
    this._number = number;
  }

  get areaCode() {return this._areaCode;}
  get number() {return this._number}
}