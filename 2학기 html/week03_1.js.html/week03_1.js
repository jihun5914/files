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

// 함수 호출
console.log(tagString("h1", "Javascript")); // return "<h1>Javascript</h1>"

sayHello("홍길동");

let result = square(43);
console.log(result);