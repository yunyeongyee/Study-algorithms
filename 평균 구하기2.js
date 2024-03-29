//______________________________________________________________________________

// [문제 설명]
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.


// [제한사항]
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.


// [입출력 예]
//    arr	    return
//  [1,2,3,4]         2.5
//   [5,5]	       5

//_________________________________________________________________________________


function solution(arr) {
    const result = arr.reduce((sum, current) => sum + current, 0) / arr.length;
    return result;
}

// 테스트로 출력
var testArr = [5,3,4];
console.log("평균값은?", solution(testArr));


//__________________________________________________________________________________________________________________________________________
// 각 요소를 돌면서 반복 작업을 수행하고, 작업 결과물을 새로운 배열 형태로 얻으려면 map을 사용한다.
// reduce함수는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환한다.
// reduce에 전달한 함수는 오직 인수 두 개만 받고 있다. 대개 이렇게 인수를 두 개만 받는다.
// 함수 최초 호출 시, reduce의 마지막 인수인 0(초깃값)이 sum에 할당된다. current엔 배열의 첫 번째 요소인 1이 할당된다. 따라서 함수의 결과는 1이 된다.
// 두 번째 호출 시, sum = 1 이고 여기에 배열의 두 번째 요소(2)가 더해지므로 결과는 3이 된다.
// 세 번째 호출 시, sum = 3 이고 여기에 배열의 다음 요소가 더해진다. 이런 과정이 계속 이어진다.

// [참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// [참고] https://ko.javascript.info/array-methods#tasks
//__________________________________________________________________________________________________________________________________________
