function solution(num_list) {
    
    // 짝수
    let even = 0;
    
    // 홀수
    let odd = 0;
    
    // 배열에 값이 들어 있지 않다면 return -1
    if (num_list.length === 0) {
        return -1;
    }
    
    num_list.forEach((item, index) => {
        if (index === 0) {
            even += item;
        }
        else if (index % 2 !== 0) {
            odd += item;
        }
        else {
            even += item;
        }
    })
    
    let result = 0;
    
    if (even === odd) {
        return even;
    }
    else if (even > odd) {
        return even;
    }
    else if (even < odd) {
        return odd;
    }
}