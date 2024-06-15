function solution(my_string) {
    let suffixes = [];
    
    // 모든 접미사를 생성
    for (let i = 0; i < my_string.length; i++) {
        suffixes.push(my_string.slice(i));
    }
    
    // 접미사들을 사전순으로 정렬
    suffixes.sort();
    
    return suffixes;
}