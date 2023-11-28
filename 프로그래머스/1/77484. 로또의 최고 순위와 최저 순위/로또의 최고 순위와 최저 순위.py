def solution(lottos, win_nums):
    setNum = len(set(lottos) & set(win_nums))
    lowNum = setNum
    hiNum = setNum + lottos.count(0)
            
    return [min(7-hiNum,6), min(7-lowNum,6)]