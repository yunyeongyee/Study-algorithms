/*__________________________________________________________________________________
자연수 뒤집어 더하기

자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 
예를들어 n이 12345이면 "5+4+3+2+1=15" 라는 문자열을 리턴합니다.
제한 조건
N의 범위 : 100,000,000 이하의 자연수
입출력 예
n: 12345
result: "5+4+3+2+1=15"
n: 1532576
result: "6+7+5+2+3+5+1=29"
지정 입력값
n: 718253
result: "3+5+2+8+1+7=26"
__________________________________________________________________________________*/

function solution(n) {
            let sum = 0;
            let rst = 0;
            let result = 0;
            let arr = String(n).split('').reverse().map(i => parseInt(i));

            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
                if (i < arr.length - 1) {
                    sum += "+";
                }
                rst += arr[i];
            }
            result = sum + "=" + rst
            return result;
        };
        console.log(solution(718253))

/*__________________________________________________________________________________
function solution(n) {
    let sum = 0;
    let arr = String(n).split('').reverse().map(i => parseInt(i));
    String()을 통해 숫자를 문자열로 변환시키고 split()메소드로 각각으로 나눠주고
    reverse()메소드로 나누어진 배열들을 반대로 정렬하고 
    map() 메소드와 parseInt()로 모든 요소들을 정수로 다시 변환한다. 


    for (let i = 0; i< arr.length; i++){
 
      sum +=arr[i];

    }return sum;
}; 
console.log(solution(718253)) //output: 26;
____________________________________________________________________________________*/
