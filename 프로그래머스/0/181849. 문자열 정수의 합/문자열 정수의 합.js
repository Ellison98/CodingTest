function solution(num_str) {
    return num_str.split('').reduce((a, c) => {
        return Number(a) + Number(c)
    },0)
}