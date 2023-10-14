import chai, { should } from "chai";
import { sum } from "../sum.js";
chai.should();
//describe 一组测试 嵌套
//it 一个测试
//使用chai去写测试用例
//should风格

describe("大组3测试", () => {
  it("小组1测试", () => {
    // should风格就像说话一样
    sum(1).should.exist.and.equal(1).and.be.a("number");
  });
});
