function solution(n) {
    var pizzeaBox = 6;
    
    while (pizzeaBox % n !== 0) {
        pizzeaBox += 6;
    }
    
    return pizzeaBox/6;
}