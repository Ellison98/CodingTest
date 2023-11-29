def solution(my_string):
    # 모음을 나타내는 리스트
    vowels = ['a', 'e', 'i', 'o', 'u']
    # 모음을 제거한 결과를 저장할 리스트
    answer = []

    # 주어진 문자열의 각 문자에 대해 반복
    for char in my_string:
        # 대소문자 구분 없이 모음이 아닌 경우에만 결과에 추가
        if char not in vowels:
            answer.append(char)

    # 리스트를 문자열로 변환하여 반환
    return ''.join(answer)