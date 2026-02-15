class ProductionPlan {
  get production() {
    return this._adjustments
    .reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}