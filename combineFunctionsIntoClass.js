// client 1

const aReading = acquireReadting();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2
const aReading = acquireReadting();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const textableCharge = Math.max(0, base - taxThreshold(aReading.year));
