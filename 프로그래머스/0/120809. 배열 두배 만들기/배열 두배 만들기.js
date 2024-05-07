function solution(numbers) {
    let answer = [];
    
    // 배열의 길이 만큼 반복
    for(let i = 0; i < numbers.length; i++) {
        // 배열의 인덱스 마다 * 2
        answer[i] = numbers[i] * 2
    }
    
    return answer;
}