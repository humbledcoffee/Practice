import assert from "assert";
import axios from "axios";
import supertest from "supertest";
import app from "../app.js";
// describe("接口大组测试", async () => {
//   it("返回html代码测试", async () => {
//     let { data } = await axios.get("http://localhost:3000/");
//     assert.strictEqual(data, "曹书美");
//   });
// });

describe("接口大组2测试", async () => {
  let server;
  it("返回html代码测试", async () => {
    supertest(server)
      .get("/")
      .expect("Content-Type", /test\/html/)
      .expect(200, "曹书美1");
  });
  before(() => {
    server = app.listen(3000);
  });
  //所有用例执行完后 执行的钩子函数
  after(() => {
    server.close();
  });
  beforeEach(() => {
    //每开始一个测试用例都会走 你放在大组 小组也会走
  });
  afterEach(() => {
    //每结束一个测试用例都会走 你放在大组 小组也会走
  });
});
