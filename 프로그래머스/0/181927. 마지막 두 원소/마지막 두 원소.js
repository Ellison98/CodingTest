function solution(num_list) {
    
    //  last index의 크기가 그 전의 index보다 크면 ? - : last index * 2
    let nL = num_list.length;
    
    if (num_list[nL - 2] < num_list[nL - 1]) {
        num_list.push((num_list[nL - 2] - num_list[nL - 1]) * -1);
    }
    else {
        num_list.push(num_list[nL - 1] * 2);
    }
    
    return num_list;
}