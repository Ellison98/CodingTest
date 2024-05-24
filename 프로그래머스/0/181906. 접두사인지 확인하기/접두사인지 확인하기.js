function solution(my_string, is_prefix) {
    let myA = my_string.split("");
    let isA = is_prefix.split("");
    
    if (my_string.length < is_prefix.length) return 0;
    
    for (let i = 0; i < is_prefix.length; i++) {
        if (myA[i] !== isA[i]) return 0;
    }
    
    return 1;
}