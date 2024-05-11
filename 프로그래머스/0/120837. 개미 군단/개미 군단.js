function solution(hp) {
    let ants = 0;
    
    ants += Math.floor(hp / 5);
    hp %= 5;
    
    ants += Math.floor(hp / 3);
    hp %= 3;
    
    ants += hp;
    
    return ants;
}