class Order{
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {return this._priority;}
  get priorityString() {return this._priority.toString();}
  set priority(aString) {this._priority = new Priority(aString);}
}

class Priority {
  constructor(value) {
    if(value instanceof Priority) {return value;}
    if(Priority.legalValue().includes(value))
      this._value = value;
    else
      throw new Error(`${value} is not a Priority.legalValue()`);
  }
  toString() { return this._value; }
  get _index() {return Priority.legalValue().findIndex(s => s === this._value); }
  static legalValue() {return ['low', 'normal', 'high' , 'rush'];}
  equals(other) { return this._index === other._index; }
  higherThan(other) { return this._index > other._index; }
  lowerThan(other) { return this._index < other._index; }k
}