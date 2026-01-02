import {describe, it, assert} from "vitest";
import {Province, sampleProvinceData} from "./province.js";

describe('province', function() {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
})