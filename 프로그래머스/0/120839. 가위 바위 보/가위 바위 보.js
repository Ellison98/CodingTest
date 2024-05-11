function solution(rsp) {
    
    // 가위 바위 보 정의
    let 가위 = 2;
    let 바위 = 0;
    let 보 = 5;
    
    // 승패 결과를 담을 새로운 배열
    let 승리결과 = [];
    
    // rep의 길이 만큼 반복
    for (let i = 0; i < rsp.length; i++) {
        if (Number(rsp[i]) === 가위) {
            승리결과 += 바위;
        }
        else if (Number(rsp[i]) === 바위) {
            승리결과 += 보;
        }
        else {
            승리결과 += 가위;
        }
    }
    
    return 승리결과;
}