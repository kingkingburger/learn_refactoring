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

// 어떤 사람이 속한 부서의 관리자를 알고싶다.
// manager = aPerson.department.manager; // 이렇게 불러와야 한다.