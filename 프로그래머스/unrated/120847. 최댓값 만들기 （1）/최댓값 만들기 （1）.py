def solution(numbers):
    number = sorted(numbers, reverse=True)
    answer = number[0] * number[1]
    return answer