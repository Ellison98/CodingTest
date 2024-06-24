function solution(my_string) {
    let one = my_string.split('').map((v, idx) => Number(v))
    let two = one.filter(v => !isNaN(v))
    let thr = two.sort((a, b) => a - b)
    
    return thr
}