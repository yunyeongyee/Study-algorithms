function solution(a,b) {
    let answer = 0;
    
    for (i=0; i<a.length; i++){
    // i가 a의 길이보다 작다면 반복, 1씩증가
        answer += a[i]*b[i];
        //answer = answer+(a[i]*b[i])
    } return answer;
}

//내적: 같은 성분끼리 곱의 합 