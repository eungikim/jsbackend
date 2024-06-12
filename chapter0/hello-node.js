const http = require("http"); // 1. http 객체 생성

let count = 0;

// 노드 서버 객체 생성
const server = http.createServer((req, res) => {
  console.log((count += 1)); // 2.
  res.statusCode = 200;      // 3.
  res.setHeader("Content-Type", "text/plain"); // 4.
  res.write("hello\n");      // 5.
  // prettier-ignore
  setTimeout(() => {// 6.
    res.end("Node.js");
  }, 2000);
});

server.listen(8000, () => console.log("Hello Node.js")); // 7.접속 대기
