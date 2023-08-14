const fs = require("fs");
const rs = fs.createReadStream("./fs/fs练习.txt");
const ws = fs.createWriteStream("fs练习.txt");
rs.pipe(ws);
