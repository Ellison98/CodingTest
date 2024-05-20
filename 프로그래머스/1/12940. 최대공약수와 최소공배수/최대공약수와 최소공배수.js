function solution(n, m) {
    let answer = [];
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    // GCD 계산
    let gcdValue = gcd(n, m);
    
    // LCM 계산
    let lcmValue = (n * m) / gcdValue;
    
    answer[0] = gcdValue;
    answer[1] = lcmValue;
    
    return answer;
}