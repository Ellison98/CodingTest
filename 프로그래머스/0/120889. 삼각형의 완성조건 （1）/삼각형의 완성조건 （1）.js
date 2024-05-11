function solution(sides) {
    
    // 입력된 배열을 낮은 수 부터 정렬
    let arrSort = sides.sort();
    
    // 입력된 배열의 개수 가 3이 아니라면 return 2
    if (arrSort.length < 3) {
        return 2;
    }
    
    // 값은 3개만 들어오니깐 index의 0 + 1 > 2 이면, return 1 아니면 return 2
    if (arrSort[0] + arrSort[1] > arrSort[2]) {
        return 1;
    }
    else {
        return 2;
    }
}