import {describe, it, assert, expect} from "vitest";
import {Province, sampleProvinceData} from "./province.js";

describe('province', function() {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);
  });

  it('profit', function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  })
})