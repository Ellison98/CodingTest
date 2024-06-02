function solution(age) {
    return String(age).split('').map((v) => String.fromCharCode(97 + Number(v))).join('')
}