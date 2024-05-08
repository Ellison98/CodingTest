function solution(array) {
    var answer = 0;
    
    let center = Math.floor(array.length / 2);
    array.sort((a, b) => a - b);
    
    // 배열의 값이 없을떄.
    if (array.length === 0) {
        return 0;
    }
    // 홀수 일떄.
    else if (array.length % 2 === 1) {
        return array[center];
    }
}
