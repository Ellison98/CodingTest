function solution(num_list) {
    
    // 1. 배열의 길이를 측정
    if (num_list.length > 10) {
        return num_list.reduce((a, c) => a + c);
    }
    else {
        return num_list.reduce((a, c) => a * c);
    }
}