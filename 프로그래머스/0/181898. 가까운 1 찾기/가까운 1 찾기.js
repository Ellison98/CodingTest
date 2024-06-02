function solution(arr, idx) {
    console.log(arr.splice(0, idx))
    return arr.indexOf(1) === -1 ? -1 : arr.indexOf(1) + idx
}