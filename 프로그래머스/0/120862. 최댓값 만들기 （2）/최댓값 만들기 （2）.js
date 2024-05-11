function solution(numbers) {
    let lenArr = numbers.length;
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0] * numbers[1], numbers[lenArr-1] * numbers[lenArr-2]);
}