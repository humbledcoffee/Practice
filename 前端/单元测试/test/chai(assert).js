import chai from "chai";
import { sum } from "../sum.js";
let assert = chai.assert;
//describe 一组测试 嵌套
//it 一个测试
//使用chai去写测试用例
//assert风格

describe("大组2测试", () => {
  it("小组1测试", () => {
    assert.typeOf(sum(1), "number");
    assert.equal(sum(1), 1);
    // assert.lengthOf(sum(1), 1);
  });
});
