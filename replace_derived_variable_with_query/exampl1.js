class ProductionPlan {
  get production() {
    return this._adjustments
    .reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}

// 변수를 읽는 코드를 모두 함수 호출로 대체한다.
// 왜냐하면 가변 데이터의 유효 범위를 가능한 좁혀야하기 때문.