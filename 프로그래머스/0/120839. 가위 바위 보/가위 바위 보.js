function solution(rsp) {
    let arr = {
        2 : 0,
        0 : 5,
        5 : 2,
    }
    
    return [...rsp].map(v => arr[v]).join("");
}