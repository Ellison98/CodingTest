function solution(box, n) {
    if (n === 0) {
        return 0; // 주사위 모서리 길이가 0일 경우, 주사위를 채울 수 없습니다.
    }
    return box.reduce((a, c) => a * Math.floor(c / n), 1)
}