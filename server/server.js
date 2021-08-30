const express = require("express");
const app = express();
const test = require("./Router/test");

app.use("/", test);

const port = 5000; // 노드 서버가 작동할 포트넘버
app.listen(port, () => console.log(`현재 포트 넘버는 ${port} 입니다`));

