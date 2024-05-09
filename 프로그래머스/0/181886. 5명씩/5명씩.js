function solution(names) {

    // 0. 출력값을 담을 배열 선언
    let result = [];
    
    // 1. 배열의 길이 만큼 반복
    for (let i = 0; i < names.length; i += 5) {
        
        // 2. 첫번째 인덱스의 값을 새로운 배열에 담기.
        result.push(names[i]);
    }
    
    return result;
}