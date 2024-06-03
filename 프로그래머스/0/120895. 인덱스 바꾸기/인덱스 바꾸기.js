function solution(my_string, num1, num2) {
    var answer = '';
    
    
    
    return [...my_string].map((v, idx) => {
        if (idx === num1) {
            return my_string[num2]
        }
        else if (idx === num2) {
            return my_string[num1]
        }
        return v
    }).join('')
}