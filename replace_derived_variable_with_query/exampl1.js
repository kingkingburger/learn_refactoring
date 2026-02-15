class ProductionPlan {
  get production() {
    assert(this._production === this.calcaultedProduction);
    return this._production;
  }

  get calcaultedProduction() {
    return this._adjustments
      .reduce((sum,a) => sum + a.amount, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}