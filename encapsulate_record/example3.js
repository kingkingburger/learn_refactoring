const exampleJson = {
  "1920" : {
    name: "마틴 파울러",
    id: "1920",
    usages: {
      "2016": {
        "1": 50,
        "2": 55,
      },
      "2015": {
        "1": 70,
        "2": 63
      }
    }
  },
  "38673" : {
    name: "닐 포드",
    id: "38673",
    usages: {
      "2016": {
        "1": 50,
        "2": 55,
      },
      "2015": {
        "1": 70,
        "2": 63
      }
    }
  }
}

// 쓰기 예
getCustomerData().setUsage(customerID, year, month, amount);

// 읽기 예
function compareUsage (customerID, laterYear, month) {
  const later = getCustomerData().usage(customerID, laterYear, month);
  const earlier = getCustomerData().usage(customerID, laterYear, month);
  return {laterAmount: later, change: later - earlier};
}

function getCustomerData() {return customerData}

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}
