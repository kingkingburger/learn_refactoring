class Person{
  constructor(name){
    this._name = name;
  }

  get name(){return this._name;}
  get department() {return this._department;}
  set department (value) { this._department = value; }
  get manager() {this._department.manager;}
}

class Department{
  get chargeCode() {return this._chargeCode;}
  set chargeCode (value) { this._chargeCode = value; }
  get manager() {return this._manager;}
  set manager (value) { this._manager = value; }
}

// 어떤 사람이 속한 부서의 관리자를 알고싶다.
// manager = aPerson.department.manager; // 이렇게 불러와야 한다.

manager = aPerson.manager; // 이렇게 불러올 수 있다.

// 이렇게 하면 부서객체가 캡슐화가 된 것이다.
// Person class가 Department class의 존재를 숨겨준다.
// department가 외부에 자주 쓰이는 상황이 않이면 좋은것 같네요