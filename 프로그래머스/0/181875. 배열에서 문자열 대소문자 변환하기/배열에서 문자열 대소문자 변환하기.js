function solution(strArr) {
    return strArr.map((v, idx) => idx % 2 !== 0 ? v.toUpperCase() : v.toLowerCase())
}