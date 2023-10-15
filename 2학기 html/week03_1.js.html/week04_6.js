let a = [2, 3, 12, 43, 111, 88, 53];

let sum = 0;
for(let item of a) {
    sum += item;
   if((sum)>100){
    sum -=item;
    break;
}   
}

console.log(`sum of a = ${sum}`);
//반복문을 활용하여
//100을 넘지 않는 최대 합계 구하기.
// sum of a = xxx