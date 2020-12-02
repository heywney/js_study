// AND 논리 연산자 &&

console.log(true && true);
console.log(true && false);
console.log('문장'=='문장' && 5 == 5);
console.log(5==5 && '다른 문장 1' == '다른 문장 2');

// OR 논리 연산자 ||

console.log(true || true);
console.log(false || false);
console.log('문장' == '문장' || 5 == 10);

// NOT 논리 연산자 !

console.log(!true);
console.log(!false);
console.log(!5);
console.log(!'문장');
console.log(!!5);
console.log(!!'문장');

// 삼항 연산자 조건문 ? 표현문1 : 표현문2

var condition = 5 > 10;
condition ? console.log('left') : console.log('right');
var result = condition ? (
  console.log("삼항 연산식의 첫 번째 표현식 입니다."),
  "표현식1"
) : (
  console.log("삼항 연산식의 두 번째 표현식 입니다."),
  "표현식2"
);
console.log(result);

// 비트 연산자

console.log(14 & 11);
console.log(~14);
console.log(14 | 11);
console.log(14 ^ 11);
console.log(2 << 2);
console.log(14 >> 1);
console.log(14 >>> 2);
