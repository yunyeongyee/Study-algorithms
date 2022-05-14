function solution(x, n) {
    //x:정수, 시작값과 x만큼 증가
    //n:자연수, 배열 속에 있는 아이템의 개수 출력(answer의 배열)
    let answer = []; // [] 배열형식
    
    for (i = 1; i<=n; i++){
        //n은 자연수 입력받으니까 1부터 시작해야 하므로 i=1
        //n의 숫자만큼 출력할거니까 i가 n개 이하까지 반복하고 
        //i는 1씩 증가 
        answer.push(x*i); 
        //answer안에 있는 배열이 '정수*1'만큼 커져야 하므로 (x*1) 
    }
    return answer;
}
// push() : 배열 끝에 아이템 추가하여 개수 확인
