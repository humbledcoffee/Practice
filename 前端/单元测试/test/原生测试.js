import { sum } from "../sum.js";
import assert from "assert";

//测试用例
// assert.strictEqual(sum(), 0);
// assert.strictEqual(sum(1), 1);
// assert.strictEqual(sum(1, 2), 3);
// assert.strictEqual(sum(1, 2, 3), 6);

//describe 一组测试 嵌套
//it 一个测试
//assert是nodejs的原生断言
describe("大的组1测试", () => {
  describe("小组1测试", () => {
    it("sum() 结果应该是 0", () => {
      assert.strictEqual(sum(), 0);
    });
    it("sum(1) 结果应该是 1", () => {
      assert.strictEqual(sum(1), 1);
    });
  });
  describe("小组2测试", () => {
    it("sum(1,2) 结果应该是 3", () => {
      assert.strictEqual(sum(1, 2), 3);
    });
    it("sum(1,2,3) 结果应该是 6", () => {
      assert.strictEqual(sum(1, 2, 3), 6);
    });
  });
});
//使用chai去写测试用例
