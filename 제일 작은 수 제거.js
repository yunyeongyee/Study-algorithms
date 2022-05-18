function solution(arr) {
    if (arr.length <= 1) return [-1];
    else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
    }
    return arr;
}

/*_____________________________________________________________________________________________________________________________
function solution(arr) {
    let answer = [];
    let min = Math.min(arr);
    if (arr.length <= 1) return [-1];
    }
    else {
        arr.splice(arr.indexOf(min), 1);
        //arr배열에 가장 작은 수와 일치하는 첫번째 index를 리턴한다.
        //만약 없으면 -1로 리턴
        //splice로 arr배열의 기존 요소를 변경한다. 
        answer = arr;
         //변경된 arr배열을 answer에 넣는다.
       } return answer;
}



//Math.min(): 배열 중 가장 작은 값 반환
//arr.indexOf('a',1): 찾으려는 값과 정확히 일치하는 첫번째 요소의 index를 리턴한다.(만약 찾으려는 값이 배열에 없으면 -1을 리턴)
// ...(=전개연산자(spread Operator)): 객체나 배열의 값을 하나하나 넘기는 용도로 사용 ex) ...arr
//splice(): 배열의 기존 요소 삭제,교체,새요소추가하여 배열 내용 변경
_______________________________________________________________________________________________________________________________*/