function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                count += 1; // i와 n / i가 같은 경우 (제곱근인 경우)
            } else {
                count += 2; // i와 n / i가 다른 경우
            }
        }
    }
    return count;
}

function solution(left, right) {
    let result = 0;
    for (let num = left; num <= right; num++) {
        const divisorsCount = countDivisors(num);
        if (divisorsCount % 2 === 0) {
            result += num; // 약수의 개수가 짝수인 경우 더하기
        } else {
            result -= num; // 약수의 개수가 홀수인 경우 빼기
        }
    }
    return result;
}

// 예시 사용
console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52