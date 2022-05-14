function solution(a, b) {
    for (let i = Math.min(a, b); i < Math.max(a, b); i++) {
        let answer += i;
    }
    return answer;
}
====================================================================

/* function solution(a, b) {

    let min = Math.min(a, b); //가장 작은 수 반환
    let max = Math.max(a, b) //가장 큰 수 반환
    for (let i = min; i < max; i++) {
        // i를 min이라고 하고 max보다 i가 작다면 1씩 증가.
        let answer += i;
        // answer = answer + i;
    }
    return answer;
}
*/
// Math.min(a,b): 인수로 전달 받은 값 중 가장 작은 수 반환.
