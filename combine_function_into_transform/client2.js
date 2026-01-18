const reading = {customer: "ivan", quantity: 10, month: 5, year: 2017}

// 세금을 부과할 소비량
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
