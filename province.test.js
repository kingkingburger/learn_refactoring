import {describe, it, assert, expect} from "vitest";
import {Province, sampleProvinceData} from "./province.js";

describe('province', function() {
  const asia = new Province(sampleProvinceData()); // 중복제거
  it('shortfall', function () {
    assert.equal(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);
  });

  it('profit', function () {
    expect(asia.profit).equal(230);
  })
})