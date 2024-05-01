function solution(array, n) {
    var answer = array.reduce((a, c) => {
        if (c === n) {
            a += 1;
        }
        else {
            a += 0;
        }
        return a;
    }, 0);
    return answer;
}