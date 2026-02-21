function disabilityAmount(anEmployee) {
  function isNotEligibleForDisability() {
    return anEmployee.seniority < 2
        || anEmployee.monthsDisabled > 12
        || anEmployee.isPartTime;
  }

  if(isNotEligibleForDisability()){
    return 0;
  }
}