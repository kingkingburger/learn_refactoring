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

// 독립된 검사들이라고 판단되면 이 리팩터링을 하면 안됨
// 하나의 검사로 판단되는 경우를 찾는 과정에서 코드에 대한 이해가 높아질듯