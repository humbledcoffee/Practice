//流式写入 创建写入流对象
const fs = require("fs");
const ws = fs.createWriteStream("fs练习.txt");
ws.write("1\r\n");
ws.write("2\r\n");
ws.write("3\r\n");
ws.write("4\r\n");
//终止流
ws.end(); //close也行
