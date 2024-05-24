function solution(my_string, is_suffix) {
//     var answer = 0;
//     let mL = my_string.length;  //  6
//     let iL = is_suffix.length;  //  3
    
//     if (mL < iL) return 0;
    
//     return my_string.slice((mL - iL), mL) === is_suffix ? 1 : 0;
    
    return my_string.endsWith(is_suffix) ? 1 : 0;
}