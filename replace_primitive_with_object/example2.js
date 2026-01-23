class Order{
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {return this._priority;}
  set priority(priority) {this._priority = priority;}
}

class Priority {
  constructor(value) { this._value = value; }
  toString() { return this._value; }
}