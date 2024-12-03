function solution(num, total) {
    const start_num = Math.ceil((2 * total / num + 1 - num) / 2);
    let answer = [];
    
    for (let i = 0; i < num; i++) {
        answer.push(start_num + i);
    }
    
    return answer;
}