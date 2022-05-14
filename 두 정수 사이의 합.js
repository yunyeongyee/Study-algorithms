function solution(a, b) {
    let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i;
    }
    return answer;
}
/*___________________________________________________________

    function solution(a, b) {

    let min = Math.min(a, b); //가장 작은 수 반환
    let max = Math.max(a, b); //가장 큰 수 반환
    for (let i = min; i <= max; i++) {
        // i를 min이라고 하고 i가 max보다 작거나 같으면 1씩 증가.
        let answer += i;
        // answer = answer + i;
    }
    return answer;
}

// Math.min(a,b): 인수로 전달 받은 값 중 가장 작은 수 반환. 
____________________________________________________________*/

