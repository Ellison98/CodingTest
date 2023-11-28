n = int(input())
numbers = list(map(int, input().split()))

numMin = min(numbers)
numMan = max(numbers)

print(numMin, numMan)