function solution(n) {
    arr = (n+'').split('').sort((a, b) => b - a);
    arrMap = arr.map((v) => Number(v));
    
    return +arrMap.join('');
}