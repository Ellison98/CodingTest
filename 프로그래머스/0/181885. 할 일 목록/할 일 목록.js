function solution(todo_list, finished) {
    if (todo_list.length !== finished.length) {
        return -1;
    }
    
    return todo_list.filter((item, index) => !finished[index]);
}