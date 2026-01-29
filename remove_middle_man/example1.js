// 이전 hide_delegate의 역순이다.
// 캡슐화한 클래스를 다시 풀어서 연속된 사용으로 처리한다.

class Person{
  constructor(name){
    this._name = name;
  }

  get name(){return this._name;}
  get manager() {this._department.manager;}
  get department(){return this._department;}
}

class Department{
  get chargeCode() {return this._chargeCode;}
  set chargeCode (value) { this._chargeCode = value; }
  get manager() {return this._manager;}
  set manager (value) { this._manager = value; }
}

manager = aPerson.department.manager; // 이렇게 불러올 수 있다.

// 어느정도 까지 숨겨야하는지 적정선이 어렵다.
// 시스템이 바뀌면 '적절하다'의 기준도 바뀌기 마련이다.
// 캡슐화가 너무 많아지면 전달만 하는 클래스가 될 수 있다.
// 지금 적절하다고 느끼면 바로바로 캡슐화하자. 이렇게 풀어버릴 수 있으니깐.