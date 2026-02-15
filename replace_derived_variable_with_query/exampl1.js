class ProductionPlan {
  get production() {return this._production;}
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}