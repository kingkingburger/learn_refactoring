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
  get areaCode() {return this._areaCode;}
  set areaCode(areaCode) {this._areaCode = areaCode;}
  get number() {return this._number}
  set number(number) {this._number = number;}
}