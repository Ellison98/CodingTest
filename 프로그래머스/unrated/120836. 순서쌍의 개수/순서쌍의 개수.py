def solution(n):
    count = 0
    
    for i in range(1, int(n**0.5)+1):
        if n % i == 0:
            count += 1
            # n의 약수 i와 n/i를 이용하여 쌍을 만듭니다.
            if i != n // i:
                count += 1
                
    return count
