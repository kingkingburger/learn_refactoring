class Person {
  get name() { return this._name; }
  set name (value) { this._name = value; }
  get telephoneNumber() { return `${this.officeAreaCode} ${this.officeNumber}`; }
  get officeAreaCode() {return this._officeAreaCode; }
  set officeAreaCode (value) { this._officeAreaCode = value; }
  get officeNumber() {return this._officeNumber;}
  set officeNumber (value) { this._officeNumber = value; }
}

class TelephoneNumber {

}