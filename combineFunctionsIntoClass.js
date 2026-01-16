// client 1

const aReading1 = acquireReadting();
const baseCharge = calculateBaseCharge(aReading1);

// client2
const aReading2 = acquireReadting();
const base = calculateBaseCharge(aReading2);
const textableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 기본 요금 계산 함수
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

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
}