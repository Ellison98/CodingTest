function solution(d, budget) {
    let answer = 0;
    
    //  0. d배열의 오름차순으로 정렬
    let sortD = d.sort((a, b) => a - b);
    
    //  1. d의 길이 만큼 반복
    for (let i = 0; i < d.length; i++) {
        //  2. budget - sortD[i],   answer++
        budget -= sortD[i];
        
        // 3. 예산이 부족하다면
        if (budget < 0) {
            return answer;
        }
        answer++;
    }
    
    return answer;
}