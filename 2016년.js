function solution(a, b) {
   let arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let date = new Date(`2016-${a}-${b}`);
 // new Date()를 호출하여 date라는 변수에 넣고 날짜 나타내는 문자열을 a,b인수로 받아 Date객체로 반환
    let day = date.getDay();
    //date라는 변수값을 getDay()로 요일을 나타내는 정수 0~6 반환
    
    return arr[day];
    //day변수의 값을 arr라는 배열의 인덱스를 활용해서 요일 출력
}

//Date(): 시간의 특정지점을 나타내는 Date객채를 플랫폼에 종속되지 않는 형태로 생성
