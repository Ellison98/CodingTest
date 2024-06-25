function solution(order) {
    let answer = order.toString().split('').map((v, _) => {
        let answer = 0
        if (v === '3' || v === '6' || v === '9') {
            answer += 1
        }
        return answer
    })
    
    return answer.reduce((a, c) => a + c , 0)
}