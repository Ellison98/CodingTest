function solution(array, height) {
    let answer = array.reduce((a, c) => {
        if (c > height) {
            a += 1;
        }
        return a;
    }, 0);
    
    return answer;
}