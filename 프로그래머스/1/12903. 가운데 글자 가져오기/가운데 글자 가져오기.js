function solution(s) {
    if(s.length === 0) {
        return -1;
    }
    
    let even = Math.floor(s.length / 2);
    let odd = Math.floor(s.length / 2);
    
    return s.length % 2 !== 0 ? s[odd] : s.slice(odd-1, odd+1);
}