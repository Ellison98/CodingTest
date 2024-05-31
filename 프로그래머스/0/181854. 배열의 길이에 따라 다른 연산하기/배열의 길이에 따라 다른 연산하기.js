function solution(arr, n) {
    return arr.map((v, index) => arr.length % 2 !== index % 2 ? v + n : v)
}