function solution(my_string) {
    return [...my_string].reduce((a, c) => {
        if ("123456789".includes(c)) {
            return a + Number(c);
        }
        return a;
    }, 0);
}