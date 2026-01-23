// 컬랙션 => list, array, dict 같은 가변형 데이터 집합들
// class로 묶여도 통채로 변경될 가능성 있음

class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name () { return this._name; }
  get courses () { return this._courses; }
  set courses (value) { this._courses = value; }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError()}) {
    const index = this._courses.indexOf(aCourse);
    if (index > -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

class Course {
  constructor(name, isAdvanced ) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name () { return this._name; }
  get isAdvanced () { return this._isAdvanced; }
}