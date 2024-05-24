function solution(my_strings, parts) {
    return parts.map(([f, s], index) => {
        return my_strings[index].slice(f, s+1)
    }).join('')
}