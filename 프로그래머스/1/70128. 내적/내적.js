function solution(a, b) {
    if (a.length !== b.length) {
        return -1;
    }
    
    return a.reduce((acc, _ , i) => acc += a[i] * b[i], 0);
}