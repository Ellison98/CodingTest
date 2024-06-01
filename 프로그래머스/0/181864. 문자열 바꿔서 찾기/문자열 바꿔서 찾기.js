function solution(myString, pat) {
    return [...myString].map((v) => {
        if (v === 'A') {
            return 'B'
        }
        return 'A'
    }).join('').includes(pat) ? 1 : 0
}