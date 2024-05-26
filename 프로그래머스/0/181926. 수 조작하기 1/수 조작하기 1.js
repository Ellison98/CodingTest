function solution(n, control) {
    for (let i = 0; i < control.length; i++) {
        let c = control[i];
        n = c === 'w' ? n + 1 :
            c === 's' ? n - 1 :
            c === 'd' ? n + 10 :
            c === 'a' ? n - 10 :
            n;
    }
    return n;
}