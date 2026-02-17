class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {return this._telephoneNumber.code;}
  set officeAreaCode(officeAreaCode) {this._telephoneNumber = new TelephoneNumber(officeAreaCode, this.officeNumber);}
  get officeNumber() {return this._telephoneNumber.officeNumber;}
  set officeNumber(officeNumber) {this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, officeNumber);}

}

class TelephoneNumber {
  constructor(areaCode, number) {
    this._telephoneNumber = areaCode;
    this._number = number;
  }

  get areaCode() {return this._areaCode;}
  get number() {return this._number}

  equals(other) {
    if(!(other instanceof TelephoneNumber)) return false;
    return this.areaCode === other.areaCode && this.number === other.number;
  }
}

// 값 객체를 써서 외부 변화에 불변적인 상황을 만든다