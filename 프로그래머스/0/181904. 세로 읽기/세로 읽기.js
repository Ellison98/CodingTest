function solution(my_string, m, c) {
    let answer = [];
    
    for (let i = 0; i < my_string.length; i++) {
        if (i === c - 1) { 
            for (let j = i; j < my_string.length; j += m) {
                answer.push(my_string[j])
            }
        }
    }
    
    return answer.join('')
}