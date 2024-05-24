function solution(n, k) {
    var answer = [];
    let c = Math.floor(n / k) + 1;
    
    for (let i = 1; i < c; i++) {
        answer.push(k * i);
    }
    
    return answer
}