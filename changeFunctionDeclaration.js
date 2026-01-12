function circum(radius) {
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

class Book {
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

function isNewEngland(Customer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(Customer.address.state);
}

const newEnglander = someCustomers.filter(c => isNewEngland(c));