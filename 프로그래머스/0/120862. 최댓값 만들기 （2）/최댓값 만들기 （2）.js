function solution(numbers) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                let addNum = numbers[i] * numbers[j];
                if (maxNum < addNum) {
                    maxNum = addNum;
                }
            }
        }
    }
    
    return maxNum;
}