class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() { return this._name; }
  set name (value) { this._name = value; }
  get telephoneNumber() { return `${this.officeAreaCode} ${this.officeNumber}`; }

  get officeNumber() {return this._officeNumber;}
  set officeNumber (value) { this._officeNumber = value; }
}

class TelephoneNumber {
  get officeAreaCode() {return this._officeAreaCode; }
  set officeAreaCode (value) { this._officeAreaCode = value; }
}