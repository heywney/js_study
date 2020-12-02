// while (조건식) {
//   반복하게 될 문장
// }

// do {
//   반복하게 될 문장
// } while (조건식) {
//
// }

var hometown = [
  {name: '리사', city: '방콕'},
  {name: '지수', place: '한국', city : '군포'},
  {name: '제니', place: '한국', city: '서울'},
  {name: '로제', place: '호주', city: '뉴질랜드'},
];

var isHometown = function(h, name) {
  console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name} 을 찾습니다.`);

  if (h.name === name) {
    console.log(`${h.name} 의 고향은 ${h.city} ${h.place} 입니다.`);
  return true;
}
  return false;
}

var h;
while (h = hometown.shift()) {
  if (!h.name || !h.place || !h.city) continue;

  var result = isHometown(h, '로제');
  if (result) break;
}

var i = 0;
var names = ['리사', '지수', '제니', '로제'];
var cities = ['방콕', '군포', '서울', '뉴질랜드'];
do {
  hometown[i] = {name: names[i], city : cities[i]};
  i++;
} while (i < 4);

console.log(hometown);
