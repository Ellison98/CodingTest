function solution(numbers, direction) {
    let answer = [];
    
    if (direction === 'right') {
        answer.push(numbers[numbers.length - 1]);
        for (let i = 0; i < numbers.length - 1; i++) {
            answer.push(numbers[i]);
        }
    }
    else {
        answer.push(numbers[1]);
        for (let i = 2; i < numbers.length; i++) {
            answer.push(numbers[i]);
        }
        answer.push(numbers[0]);
    }
    
    return answer
}