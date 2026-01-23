class Order{
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {return this._priority;}
  set priority(priority) {this._priority = priority;}
}