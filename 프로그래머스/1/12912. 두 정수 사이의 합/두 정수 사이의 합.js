function solution(a, b) {
    if (a === b) {
        return a;
    }
    
    let centerN = 0;
    let aB = Math.abs(a - b);
    
    for (let i = 1; i < aB; i++) {
        if (a < b) {
            centerN += a + i;
        }
        else {
            centerN += b + i;
        }
    }
    
    return a + b + centerN;
}