const solution = (n) => {
    var piece = 6;
    
    while(true) {
        if(piece % n === 0) {
            break;
        }
        else{
            piece += 6;
        }
    }

    return piece / 6;
}

