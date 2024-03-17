# 결과를 입력받을 리스트 0으로 초기화
result = [0, 0, 0, 0]

# 거스름돈의 종류
num = [25, 10, 5, 1]

# 테스트 케이스의 개수
t = int(input())

# 테스트 케이스의 수 만큼 반복
for _ in range(t):
    change = int(input())
    for i in range(4):
        result[i] = change // num[i]  # 오타 수정: 'chage' -> 'change'
        change %= num[i]  # 로직 수정: 나누기의 몫이 아닌 나머지를 다음 단계의 거스름돈으로 사용
    print(' '.join(map(str, result)))
    result = [0, 0, 0, 0]  # 다음 테스트 케이스를 위해 result 리스트를 초기화
