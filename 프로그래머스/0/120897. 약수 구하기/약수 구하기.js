function solution(n) {
    let answer = [];
    for (let i = 0; i < n + 1; i++) {
        if (n % i === 0) {
            answer.push(i)
        }
    }
    
    return answer
}