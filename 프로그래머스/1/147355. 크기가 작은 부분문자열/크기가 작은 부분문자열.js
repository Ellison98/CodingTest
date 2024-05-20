function solution(t, p) {
    let count = 0;
    let pNum = Number(p);  // p를 정수형으로  ,   "271" -> 271
    let pLength = p.length; // p의 길이    ,   3
    
    //  7 - 3 = 4반큼 반복 = 같을떄 까지기 때문에 0 ~ 4 총 5번 반복하면서 i는 1씩 증가
    for (let i = 0; i <= t.length - pLength; i++) {
        
        //  0 ~ 0+3까지 자른 값을 subStr에 저장  ,   subStr = "314"
        let subStr = t.slice(i, i + pLength);
        
        //  "314" -> 314
        let subNum = Number(subStr);
        if (subNum <= pNum) {
            count++;
        }
    }
    
    return count;
}