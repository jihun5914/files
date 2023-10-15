// 함수 정의

function doubleX(n) {
    return 2 * n;
}

function square(n) {
    return n * n;
}

// "안녕하세요 홍길동씨" 출력하기
function sayHello(name) {
    console.log(`안녕하세요 ${name}씨`);
}

// 태그 문자열 생성 함수
function tagString(tag, text) {
    return `<${tag}>${text}<${tag}>`;
}
//---------------------------
// 매개변수 a (배열)의 모든 원소의 합을 계산하고 return 하기.
function calculateSum(a) {
    let sum = 0;
    
    // 배열의 모든 원소를 순회하면서 합을 계산
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
    }
    
    // 합을 반환
    return sum;
  }
  
  // 예시 배열
  const myArray = [1, 2, 3, 4, 5];
  
  // 함수 호출하여 배열의 합을 구하기
  const result = calculateSum(myArray);
  
  console.log(result); // 결과 출력
      
    

//------------------------------------------------
// 함수 호출
console.log(tagString("h1", "Javascript")); // return "<h1>Javascript</h1>"
    
sayHello("홍길동");

let result = square(43);
console.log(result);