function solution(n) {
    let arr = new Array(n)
    
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n).fill(0)
        
        for (let j = 0; j < n; j++) {
            if (i === j) arr[i][j] = 1
        }
    }
    
    return arr
}