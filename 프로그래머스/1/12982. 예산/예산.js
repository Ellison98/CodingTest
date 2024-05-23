function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, val) => {
        return count + ((budget -= val) >= 0)
    }, 0)
}