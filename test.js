const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
var a = Number(input[0]);
var b = Number(input[1]);
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);

