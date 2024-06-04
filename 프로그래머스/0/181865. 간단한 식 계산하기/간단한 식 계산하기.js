function solution(binomial) {
    let answer = 0;
    let newArr = binomial.split(" ");
    if (newArr[1] === '+') {
        answer = Number(newArr[0]) + Number(newArr[2])
    }
    else if (newArr[1] === '-') {
        answer = Number(newArr[0]) - Number(newArr[2])
    }
    else {
        answer = Number(newArr[0]) * Number(newArr[2])
    }
    
    return answer;
}