function solution(num_list) {
    const x = num_list.reduce((a, c) => a * c, 1);
    const add = num_list.reduce((a, c) => a + c, 0);
    return x < (add * add) ? 1 : 0;
}