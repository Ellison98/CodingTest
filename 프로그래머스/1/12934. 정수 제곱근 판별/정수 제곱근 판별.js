function solution(n) {
    let sqrtN = Math.floor(Math.sqrt(n));
    
    if (sqrtN * sqrtN === n) {
        sqrtN++;
        return sqrtN *= sqrtN;
    }
    return -1;
}