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
})