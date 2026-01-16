class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {return this._customer;}
  get quantity() {return this._quantity;}
  get year() {return this._year;}
  get month() {return this._month;}

  get calculateBaseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

const rawReading = acquireReadting();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.calculateBaseCharge;
