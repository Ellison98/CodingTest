function solution(num_list, n) {
    let a = num_list.slice(n);
    let b = num_list.slice(0, n);
    
    return a.concat(b);
}