function solution(absolutes, signs) {
    if (absolutes.length !== signs.length) {
        return -1;
    }
    
    let answer = 0;
    
    for (let i = 0; i < signs.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i];
        }
        else {
            answer -= absolutes[i];
        }
    }
    
    return answer;
}