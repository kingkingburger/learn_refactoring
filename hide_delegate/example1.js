class Person{
  constructor(name){
    this._name = name;
  }

  get name(){return this._name;}
  get department() {return this._department;}
  set department (value) { this._department = value; }
}

class Department{
  get chargeCode() {return this._chargeCode;}
  set chargeCode (value) { this._chargeCode = value; }
  get manager() {return this._manager;}
  set manager (value) { this._manager = value; }
}