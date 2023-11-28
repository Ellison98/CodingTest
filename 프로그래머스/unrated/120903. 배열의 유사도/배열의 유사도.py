def solution(s1, s2):
    # 두 배열에서 공통으로 존재하는 원소의 개수를 구함
    common_elements = len(set(s1) & set(s2))
    
    return common_elements
