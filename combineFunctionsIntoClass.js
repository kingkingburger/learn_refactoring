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