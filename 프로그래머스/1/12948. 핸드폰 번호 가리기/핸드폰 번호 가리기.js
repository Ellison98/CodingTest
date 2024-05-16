function solution(phone_number) {
    if (phone_number.length === 0) {
        return -1;
    }
    
    let phArr = phone_number.split('');
    let starLen = phone_number.length - 4;
    
    for (let i = 0; i < starLen; i++) {
        phArr[i] = '*';
    }
    
    return phArr.join('');
}