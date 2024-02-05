# 정수의 개수를 입력받음
N = int(input())

# 정수들을 리스트에 저장
list_box = list(map(int, input().split()))

# 찾으려는 정수를 입력받음
search_num = int(input())

# count를 0으로 초기화
count = 0

# 리스트 안에서 찾으려는 정수를 카운트함
for i in range(N):
    if search_num == list_box[i]:
        count += 1
        
# 같은 정수의 개수를 출력
print(count)
