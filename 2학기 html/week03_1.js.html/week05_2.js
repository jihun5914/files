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