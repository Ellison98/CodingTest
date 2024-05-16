function solution(absolutes, signs) {
    if (absolutes.length !== signs.length) {
        return -1;
    }
    
    return absolutes.reduce((a, c, i) => a + (c * (signs[i] ? 1 : -1)), 0)
}