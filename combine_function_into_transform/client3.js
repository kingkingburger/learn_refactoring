const reading = {customer: "ivan", quantity: 10, month: 5, year: 2017}

// 세금을 부과할 소비량
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// 본질은 같고 부가 정보만 덧붙이는 변환 함수의 이름은 'enrich'
// 형태가 변할 때만 'trasnform'
function enrichReading(original) {
  const result = _.cloneDeep(original); // loadash 라이브러리가 제공
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;
}

// 원본 객체 안변했는지 체크
it('check reading unchanged', () => {
  const baseReading = {customer: "ivan", quantity: 10, month: 5, year: 2017};
  const oracle = _.cloneDeep(baseReading);
  enrichReading(oracle);
  assert.deepEqual(baseReading, oracle);
})