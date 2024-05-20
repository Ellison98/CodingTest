function solution(arr1, arr2) {
    let rows = arr1.length;
    let cols = arr1[0].length;

    let C = new Array(rows);
    for (let i = 0; i < rows; i++) {
        C[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            C[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    return C;
}