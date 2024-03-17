pie = [1,1,2,2,2,8]
result = [0,0,0,0,0,0]

num = list(map(int, input().split()))

for i in range(len(pie)):
    result[i] = pie[i] - num[i]
    
print(' '.join(map(str, result)))