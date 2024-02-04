# 도현이는 바구니를 N개 가지고 있고, M번 공을 넣으려고 한다.
N, M = map(int, input().split())

# N개의 바구니를 만듬
basket = [0 for _ in range(N)]

# M번 만큼 반복하여 입력을 받는다.
for _ in range(M):
  i, j, k = map(int, input().split())
  for n in range(i, j+1):
    basket[n-1] = k

for n in range(N):
  print(basket[n], end = ' ')