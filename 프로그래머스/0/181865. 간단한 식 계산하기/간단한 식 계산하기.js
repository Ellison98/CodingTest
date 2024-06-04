const answer = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
}

function solution(binomial) {
    const [a, op, b] = binomial.split(' ')
    return answer[op](+a, +b)
}