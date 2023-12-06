def solution(n):
    answer = 0
    numStr = str(n)
    
    for i in range(len(numStr)):
        answer += int(numStr[i])
        
    return answer