// before
const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();
let charge;
const chargePerUnit = priceingPlan.unit;

// after
const pricingPlan = retrievePricingPlan();
const chargePerUnit = priceingPlan.unit;
const order = retrieveOrder();
let charge;

// 관련된 코드들이 가까이 모여있게 만들자
// 부수효과가 없음을 확인해야 한다. 명령-질의 원칙을 지켜가며 코딩해보자(함수형)