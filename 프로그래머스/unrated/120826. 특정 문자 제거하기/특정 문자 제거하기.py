def solution(my_string, letter):
    total = ""
    for i in range(len(my_string)):
        if my_string[i] != letter:
            total += my_string[i]
    return total