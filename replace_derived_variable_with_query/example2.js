class ProductionPlan {
  constructor(product) {
    this._initialProduction = product;
    this._productionAcceumulator = 0;
    this._adjustments = [];
  }
  get production() {
    assert(this._productionAcceumulator === this.calculatedProductionAccumulator);
    return this._initialProduction + this._productionAcceumulator;
  }

  get calculatedProductionAccumulator() {
    return this._adjustments
      .reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._productionAcceumulator += adjustment.amount;
  }
}
