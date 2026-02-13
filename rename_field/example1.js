class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }
  get name() {
    return this._title;
  }
  set name(value) {this._title = value;}
  get country() {return this._country;}
  set country(value) {this._country = value;}
}

// 호환성을 유지하면서 테스트를 처리한다.
// 호출하는 곳에서 변수를 바꾸면 호환성을 제거한다.
// 요즘은 ai 시키면 될듯