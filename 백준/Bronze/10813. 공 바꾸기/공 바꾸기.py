# 바구니의 총 개수 N, 공을 바꾸려는 횟수 M
N, M = map(int, input().split())

# 1부터 N번까지의 리스트 작성
num_list = [i for i in range(1, N+1)]

# temp 0으로 초기화
temp = 0

# M번 만큼 반복
for i in range(M):
  i, j = map(int, input().split())
  temp = num_list[i-1]
  num_list[i-1] = num_list[j-1]
  num_list[j-1] = temp

for i in range(N):
  print(num_list[i], end=' ')