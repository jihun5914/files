#1. 1~10범위의 수를 입력, 소수이면 '소수',아니면'소수 아님'범위를 벗어나면 '잘못 '출력하기 (if~elif~else,and,or 활용)
#2. 양수 판별하여 결과 판단하기
"""
1~12 범위의 월 값을 입력받는다.
월별 일수를 출력한다.
범위를 벗어난 월 값은 잘못된 값으로 출력한다.(오류 메시지 출력)
"""
#1.월 값을 입력받는다.

#2 월별 일수를 출력한다. (if-elif-else 활용하기)

m= int(input("월 입력:"))
if m<1 or m> 12:
    print(f"{m}월은 없는 달 입니다.")
elif m==2:
    print("2월은 28입니다")
elif m==4 or m==6 or m==9 or m==11:
    print(f"{m}월은 30일입니다.")
else:
    print(f"{m}월은 31일 입니다.")
