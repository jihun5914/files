let a = [2, 3, 12, 43, 111, 88, 53];
let odd = [];
let even = [];

while (a.length > 0) {
  // 배열 a에서 원소 하나를 꺼낸다.
  let item = a.shift();

  // 꺼낸 원소 item을 확인하여, odd 또는 even에 넣는다.
  if (item % 2 > 0)
    odd.push(item);
  else
    even.push(item);

  // 결과를 출력한다 (여기서는 템플릿 문자열을 사용하여 출력)
  console.log(`a = [${a}]`);
  console.log(`odd = [${odd}]`);
  console.log(`even = [${even}]`);
}