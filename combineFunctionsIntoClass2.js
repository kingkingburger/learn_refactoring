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

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, base - taxThreshold(this.year))
  }
}

const rawReading = acquireReadting();
const aReading = new Reading(rawReading);
// class의 필드인지 함수 호출인지 구분하기 어렵게 만드는게 좋다.
const basicChargeAmount = aReading.baseCharge; // 단일 책임 법칙(uniform Access principle)
const taxableCharge = aReading.taxableCharge;

