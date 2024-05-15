function solution(x) {
    
    //  1. 입력된 x의 0번째와 1번째 자리의 합
    let addX = x.toString().split('').map((x) => Number(x)).reduce((a, c) => a + c);
    
    //  2. 입력된 x을 1.번의 수로 나누어 떨어 지는가? true : false
    return (x % addX === 0) ? true : false;
}