let repositoryData;

function initialize() {
  _repositoryData = {};
  _repositoryData.customer = new Map();
}

function registerCustomer(id) {
  if(!repositoryData.customer.has(id)) {
    repositoryData.customer.set(id, new Customer(id));
  }
  return findCustomer(id);
}

function findCustomer(id) {
  return _repositoryData.customer.get(id);
}

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
  }
  get customer() {return this._customer;}
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {return this._id;}
}