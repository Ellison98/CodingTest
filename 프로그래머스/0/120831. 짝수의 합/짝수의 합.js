function solution(n) {
    var answer = 0;
    
    // n이하의 짝수를 찾는 조건문
    for (let i = 0; i <= n; i++) {
       if (i % 2 === 0) {
           answer += i;
       }  
    }
    
    return answer;
}