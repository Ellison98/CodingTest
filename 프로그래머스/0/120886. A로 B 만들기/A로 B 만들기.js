function solution(before, after) {
    var before_rev = before.split('').sort().join('');
    var after_rev = after.split('').sort().join('');
    return before_rev === after_rev ? 1 : 0;
}