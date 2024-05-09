function solution(myString, pat) {
    let upPat = pat.toUpperCase();
    return myString.toUpperCase().includes(upPat) ? 1 : 0;
}