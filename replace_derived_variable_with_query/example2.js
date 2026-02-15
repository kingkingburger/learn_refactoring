class ProductionPlan {
  constructor(product) {
    this._initialProduction = product;
    this._productionAcceumulator = 0;
    this._adjustments = [];
  }
  get production() {
    return this._initialProduction + this._productionAcceumulator;
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._productionAcceumulator += adjustment.amount;
  }
}
