def solution(s):
    answer = ''
    even = True
    
    for letter in s:
        if letter == ' ':
            answer += letter
            even = True
            continue
        elif even:
            answer += letter.upper()
        else:
            answer += letter.lower()
        even = not even
    
    return answer