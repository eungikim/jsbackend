const express = require("express");
const app = express();
let posts = [];
let postLastIs = 0;
/*
curl -X GET http://localhost:3000
curl -X POST -H "Content-Type: application/x-www-form-urlencoded"\
 -d "title=제목3&name=edward&text=으악~"\
 http://localhost:3000/posts
curl -X DELETE http://localhost:3000/posts/2
*/

// req.body 를 사용하기 위해서 JSON 미들웨어 활성화
// 사용하지 않으면 undefined 로 변환
app.use(express.json());

// POST 요청 시 컨텐트타입이 application/x-www-form-urlencoded 인 경우 파싱
app.use(express.urlencoded({ extended: true })); // JSON 미들웨어와 함께 사용

app.get('/', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { title, name, text } = req.body;
  posts.push({ id: ++postLastIs, title, name, text, createdDt: Date() });
  res.json({ title, name, text });
});

app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter((post) => post.id !== +id);
  const isLengthChanged = posts.length !== filteredPosts.length;
  posts = filteredPosts;
  if (isLengthChanged) {
    res.json('OK');
    return;
  }
  res.json('NOT CHANGED');
});

app.listen(3000, () => {
  console.log('Welcome posts START!');
});