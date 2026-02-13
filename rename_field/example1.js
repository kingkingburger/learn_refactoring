class Organization {
  constructor(data) {
    this._title = data.name;
    this._country = data.country;
  }
  get name() {
    return this._title;
  }
  set name(value) {this._title = value;}
  get country() {return this._country;}
  set country(value) {this._country = value;}
}