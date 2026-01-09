function getRate(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}

function getRate_v2(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}