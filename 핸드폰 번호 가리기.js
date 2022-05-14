function solution(phone_num) {
    let answer = phone_num.length - 4;
             
    return '*'.repeat(answer) + phone_num.slice(-4);
}


/*____________________________________________________________________
function solution(phone_num) {
    let answer = '';

    answer = '*'.repeat(phone_num.length - 4) + phone_num.slice(-4);

    return answer;
}

//repeat(): 문자열 반복한 값을 반환
//slice(): 문자열 뒷부분을 잘라내는 것 
____________________________________________________________________*/