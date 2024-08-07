function solution(arr, flag) {
    let answer = [];
    
    if (arr.length !== flag.length) return false;
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i] === true) {
            let tArr = arr[i];
            let sum = arr[i] * 2;
            for (let i = 0; i < sum; i++) {
                answer.push(tArr);
            }
        }
        else {
            let fArr = arr[i];
            for (let i = 0; i < fArr; i++) {
                answer.pop();
            }
        }
    }
    
    return answer;
}