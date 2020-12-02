// for (초기값; 조건식; 어떤 간격으로){
//   실행할 문장
// }

for (var i = 0; i < 10; i++){
  console.log( i + '번째 반복 문장 입니다.');
}

var hometown = [
  {name: '리사', place: '태국', city: '방콕'},
  {ame: '지수', place: '군포'},
  // 지수는 city속성이 없어서 !j.city 조건을 만족하여 continue가 실행
  {name: '제니', place: '한국', city: '서울'},
  {name: '로제', place: '호주', city: '뉴질랜드'},
];

for (var i=0; i < hometown.length; i++) {
  var j = hometown [i];
  if (!j || !j.city) continue;

  console.log(i + ' 번째 실행입니다.');

  if (j.name === '제니') {
    console.log(j.name + '의 고향은 ' + j.city + ' ' + j.place + ' 입니다.');
  }
}
