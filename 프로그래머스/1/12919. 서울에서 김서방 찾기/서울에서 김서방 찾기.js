function solution(seoul) {
    var answer = '';
    
    let wk = '';
    
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') {
            wk = i;
        }
    }
    
    answer = `김서방은 ${wk}에 있다`;
    
    return answer;
}