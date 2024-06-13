const http = require('http'); // 1
let count = 0;

// 노드 서버 객체 생성
const server = http.createServer((req, res) => {
  log(req, count);
  res.statusCode = 200; // 3
  res.setHeader('Content-Type', 'text/plain'); // 4
  res.write("hello\n"); // 5
  setTimeout(() => { // 6
    res.end("Node.js");
  }, 2000);
});

function log(req, c) {
  console.log(++count); // 2
}

server.listen(8000, () => console.log("Hello Node.js"));
