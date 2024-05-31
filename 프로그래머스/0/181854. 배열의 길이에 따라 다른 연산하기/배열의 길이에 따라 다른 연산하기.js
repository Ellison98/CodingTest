function solution(arr, n) {
    return arr.map((v, index) => {
        // 짝수
        if (arr.length % 2 === 0) {
            if (index % 2 !== 0) {
                return v + n
            }
            return v
        }
        // 홀수
        else {
            if (index === 0 || index % 2 === 0) {
                return v + n
            }
            return v
        }
    })
}