function solution(arr) {
    let reduceArr = arr.reduce((a, c) => a + c);
    return reduceArr / arr.length;
}