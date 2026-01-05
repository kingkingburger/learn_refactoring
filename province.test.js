import {describe, it, assert, expect, beforeEach} from "vitest";
import {Province, sampleProvinceData} from "./province.js";

describe('province', function() {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData()); // 중복제거
  })

  it('shortfall', function () {
    assert.equal(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);
  });

  it('profit', function () {
    expect(asia.profit).equal(230);
  })

  it('change production', () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  })

  it('zero demand', () => {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  })

  it('negative demand', () => {
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  })
})

describe('no producers', () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  });

  it('shortfall', function () {
    expect(noProducers.shortfall).equal(30);
  })

  it('profit', function () {
    expect(noProducers.profit).equal(0);
  })
})