function solution(num_list) {
    
    // 짝수
    let even = 0;
    
    // 홀수
    let odd = 0;
    
    // 배열에 값이 들어 있지 않다면 return -1
    if (num_list.length === 0) {
        return -1;
    }
    
    num_list.forEach((item, index) => index % 2 === 0 ? even+=item : odd+=item);
    
    return Math.max(even, odd);
}