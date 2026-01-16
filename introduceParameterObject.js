// 매개변수 객체 만들기

const station = {
  name: "ZB1",
  readings: [
    {temp: 47, time: "2016-11-10 09:10"},
    {temp: 53, time: "2016-11-10 09:20"},
    {temp: 58, time: "2016-11-10 09:30"},
    {temp: 53, time: "2016-11-10 09:40"},
    {temp: 51, time: "2016-11-10 09:50"},
  ]
}

// 정상 범위를 벗어난 측정값을 찾는 함수
function readingOutsideRange(station, min, max, range) {
  return station.readings
        .filter(r => r.temp < min || r.temp > max);
}

alerts = readingOutsideRange(station,
    operationPlan.temperatureFloor, // 최저온도
    operationPlan.temperatureCeiling, // 최고온도
    null
    );

class NumberRange {
  constructor(min, max) {
    this._data = {min: min, max: max};
  }
  get min() {return this._data.min;}
  get max() {return this._data.max;}
}