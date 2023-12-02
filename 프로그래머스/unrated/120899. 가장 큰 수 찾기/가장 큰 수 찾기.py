def solution(array):
    answer = []
    max_num = array[0]
    max_idx = 0
    
    for idx, num in enumerate(array):
        if num > max_num:
            max_num = num
            max_idx = idx
    
    return [max_num, max_idx]