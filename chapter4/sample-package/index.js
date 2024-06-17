// 1.모듈을 require 함수로 포함시킬 때 실행됩니다.
console.log('require 로 부르면 실행됩니다.');

module.exports = { // 2.외부로 노출할 객체를 지정합니다.
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  multi: (a, b) => a * b,
  div: (a, b) => a / b,
}