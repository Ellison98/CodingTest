function solution(n, k) {
    
    // n 1개의 가격은 12,000
    let n_total = n * 12000
    
    // k 1개의 가격은 2,000
    let k_total = k * 2000
    
    // n 의 서비스 가격 제거
    let servicePrice = Math.floor(n / 10) * 2000
    
    return n_total + k_total - servicePrice
}