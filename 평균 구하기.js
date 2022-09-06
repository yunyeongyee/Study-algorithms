function solution(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        // 'sum += arr[i]' = 'sum = sum + arr[i]'
        //array의 i번째 숫자와 sum을 더해 다시 sum이라는 변수에 값을 넣는다.
    }

    answer = sum / arr.length;
    return answer;
}

// .length: 문자열 길이 반환 
