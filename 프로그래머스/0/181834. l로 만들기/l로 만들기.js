function solution(myString) {
    let answer = [...myString].map(v => v.charCodeAt())
    return [...answer].map(v => v <= 108 ? 'l' : String.fromCharCode(v)).join('')
}