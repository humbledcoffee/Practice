import fs from "fs";
const fsp = fs.promises;
import assert from "assert";
describe("大组5测试", () => {
  it("小组1异步测试", (done) => {
    fs.readFile("./test/异步测试.txt", "utf-8", (err, data) => {
      if (err) {
        done(err);
      } else {
        assert.strictEqual(data, "li");
        done();
      }
    });
  });
});
//还可以用async和await
describe("大组6测试", () => {
  it("小组1异步测试", async () => {
    let result = await fsp.readFile("./test/异步测试.txt", "utf-8");
    // assert.strictEqual(result, "li2");
  });
});
