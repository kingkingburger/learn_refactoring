class Account {
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0)
      result += this.type.overdraftCharge(this.type.daysOverdrawn);
    return result;
  }
}

class AccountType {
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7)
        return baseCharge;
      else baseCharge + (daysOverdrawn - 7) * 0.85;
    }
    else
      return daysOverdrawn * 1.75;
  }
}


// 매개변수를 개념에 따라 적절히 넣어주는 것이 중요한 것 같아.
// 왠만하면 메서드, 함수를 때서 처리하는 것이 결합도를 줄이는 것이다.