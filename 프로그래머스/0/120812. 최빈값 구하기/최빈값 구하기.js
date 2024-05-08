function solution(array) {
    if (array.length === 0) return -1; // 빈 배열인 경우 -1 반환

    let frequency = new Map(); // 값의 빈도수를 저장할 Map 객체 생성

    // 각 요소의 빈도수 계산
    array.forEach(num => {
        if (frequency.has(num)) {
            frequency.set(num, frequency.get(num) + 1);
        } else {
            frequency.set(num, 1);
        }
    });

    let maxFrequency = 0; // 최대 빈도수 초기화
    let mode = []; // 최빈값 저장할 배열 초기화

    // 최대 빈도수와 해당 값들 찾기
    frequency.forEach((count, num) => {
        if (count > maxFrequency) {
            maxFrequency = count;
            mode = [num]; // 새 최빈값으로 초기화
        } else if (count === maxFrequency) {
            mode.push(num); // 최대 빈도수가 같은 값 추가
        }
    });

    // 최빈값이 하나인지 여러 개인지에 따라 반환 값 결정
    if (mode.length === 1) {
        return mode[0]; // 최빈값이 하나일 때
    } else {
        return -1; // 최빈값이 여러 개일 때
    }
}
