import chai, { should } from "chai";
import { sum } from "../sum.js";
let expect = chai.expect;
//describe 一组测试 嵌套
//it 一个测试
//使用chai去写测试用例
//expect风格

describe("大组4测试", () => {
  it("小组1测试", () => {
    expect(sum(1)).to.be.at.most(2);
    expect(sum(1)).to.be.at.least(0);
    expect(sum(1)).to.be.at.within(0, 2);
    expect(sum(1)).to.exist;
    expect(sum(1)).to.be.a("number");
    expect(sum(1)).to.equal(1);
    expect(sum(1)).to.not.equal(3);
    // expect(sum(1)).to.have.length(1);
  });
});
