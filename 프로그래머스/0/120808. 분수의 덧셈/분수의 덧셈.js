function solution(numer1, denom1, numer2, denom2) {
    // 분모
    let bonga = (denom1 * numer2) + (denom2 * numer1);
    
    // 분자
    let bonmo = (denom1 * denom2);
    
    // 기약분수 검증
    // 1. 최소분모 찾기
    let minNUm = 0;
    if (bonga > bonmo) {
        minNum = bonmo;
    }else {
        minNum = bonga;
    }
    
    // 2. 기약분수가 될떄까지 나누기
    while(true) {
        if(bonga % minNum === 0) {
            if(bonmo % minNum === 0) {
                return [(bonga / minNum), (bonmo / minNum)];
            }
        }
        minNum = minNum -= 1;
    }
}