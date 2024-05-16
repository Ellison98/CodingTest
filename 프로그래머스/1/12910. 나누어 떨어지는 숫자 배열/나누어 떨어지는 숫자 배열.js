function solution(arr, divisor) {
    let answer = arr.filter((v) => v % divisor === 0);
    
    if (answer.length === 0) {
        return [-1];
    }
    
    return answer.sort((a, b) => a - b);
}