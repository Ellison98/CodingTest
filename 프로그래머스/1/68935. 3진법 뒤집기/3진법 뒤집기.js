function solution(n) {
    var answer = "";
    
    // 10진수 -> 3진수
    while (n > 0) {
        answer = (n % 3) + answer;
        n = Math.floor(n / 3);
    }
    
    // 배열 뒤집기
    answer = answer.split('').reverse().join('');
    
    // 3진수 -> 10진수
    let result = 0;
    for (let i = 0; i < answer.length; i++) {
        result += answer[i] * 3**(answer.length - 1 - i);
    }
    
    return result;
}