def solution(n):
    answer = 0
    
    if n % 2 != 0:
        # 문제 1: 홀수인 경우 합을 구하는데 사용할 변수를 초기화해야 합니다.
        for i in range(1, n+1, 2):  # 홀수만 반복
            answer += i
    else:
        # 문제 2: 짝수인 경우 제곱의 합을 구하는데 사용할 변수를 초기화해야 합니다.
        for i in range(2, n+1, 2):  # 짝수만 반복
            answer += i**2
        
    return answer
