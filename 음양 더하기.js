function solution(absolutes, signs) {
    //absolutes: 정수, signs:정수의 부호 넣는 곳
    let answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        //i가 0인데 i가 absolutes의 길이보다 작으면 i값을 증가해서 for문 돌아간다. 
        if (signs[i] == true) {
            // (부호 넣는 곳)signs에서 i가 양수면 true
            answer += absolutes[i];
            //answer = answer + absolutes[i];
        } else {
            answer -= absolutes[i];
            //answer = answer-absolutes[i];
        }
    }
    return answer;
}
