def solution(n):
    sqrtNum = int(n**0.5)
    if sqrtNum**2 == n:
        return 1
    return 2