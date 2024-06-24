function solution(a, b, c) {
 
    let sumNum = a + b + c
    let squareNum = a * a + b * b + c * c
    let aCubeNum = a * a * a + b * b * b + c * c * c
    
    if (a === b && b === c) return sumNum * squareNum * aCubeNum
    if (a === b || a === c || b === c) return sumNum * squareNum
    return sumNum
}