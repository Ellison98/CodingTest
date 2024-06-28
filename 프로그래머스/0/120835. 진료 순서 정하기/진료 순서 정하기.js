function solution(emergency) {
    let newArr = [...emergency].sort((a, b) => b - a)
    
    return emergency.map(v => newArr.indexOf(v) + 1)
}