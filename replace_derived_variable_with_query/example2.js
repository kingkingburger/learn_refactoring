class ProductionPlan {
  constructor(product) {
    this._production = product;
    this._adjustments = [];
  }
  get production() {
    return this._production;
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}
