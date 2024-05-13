function solution(cards1, cards2, goal) {
    let idx1 = 0;  // cards1의 인덱스
    let idx2 = 0;  // cards2의 인덱스
    let goalIdx = 0;  // goal의 인덱스

    while(goalIdx < goal.length) {
        let currentWord = goal[goalIdx];

        // cards1의 현재 인덱스 단어와 goal의 현재 단어가 일치하면 cards1에서 다음 단어로 넘어간다
        if (idx1 < cards1.length && cards1[idx1] === currentWord) {
            idx1++;
            goalIdx++;
        }
        // cards2의 현재 인덱스 단어와 goal의 현재 단어가 일치하면 cards2에서 다음 단어로 넘어간다
        else if (idx2 < cards2.length && cards2[idx2] === currentWord) {
            idx2++;
            goalIdx++;
        }
        // 연속적인 단어가 아닐 시 return 'No'
        else {
            return 'No';
        }
    }
    return 'Yes';
}
