# A, B, C
botton = [300, 60, 10]

# 결과
result = [0, 0, 0]

# 요리시간
T = int(input())

# T가 10의 배수가 아닌 경우, -1을 출력하고 프로그램을 종료합니다.
if T % 10 != 0:
    print(-1)
else:
    # 버튼 누르기
    while T > 0:
        for i in range(3):
            if T >= botton[i]:
                result[i] += T // botton[i]
                T = T % botton[i]

    print(' '.join(map(str, result)))