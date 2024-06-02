function solution(myString) {
    return [...myString].map((v) => {
        if (v === 'a') {
            return 'A';
        } else if (v === 'A') {
            return 'A';
        } else if (v >= 'A' && v <= 'Z') {
            return v.toLowerCase();
        } else {
            return v;
        }
    }).join('');
}