function solution(n){
    let sum = 0;
    let string = String(n);
    // n을 문자열로 변환
for (let i=0; i<string.length; i++){
    sum += parseInt(string[i]);
  //string변수에 담겨있는 i번째 문자열을 정수로 변환해서 sum이랑 더한 값을 다시 sum변수에 넣는다
}
    return sum;
}


// String():숫자를 문자열로 변환
// parseInt(): 문자열을 정수로 변환