function solution(a, b) {
    
    // 1. 입력 받은 배열을 합쳐 새 배열을 만들기
    let newArr = [a,b];
    
    // 2. 배열을 앞 뒤로 합친 값
    const addArr = Number(newArr.join(''));
    
    // 3. 배열의 값끼리 곱한 값
    const xArr = 2 * a * b;
    
    // 4. 각 새로운 배열 끼리 비교 후 큰 값을 출력
    if (addArr > xArr) {
        return addArr;
    }else {
        return xArr;
    }
    
    return answer;
}