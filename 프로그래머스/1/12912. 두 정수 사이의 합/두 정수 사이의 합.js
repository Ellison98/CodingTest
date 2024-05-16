function solution(a, b) {
    //  가우스의 덧셈 법칙
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}