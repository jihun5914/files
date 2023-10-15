#1. 1~10범위의 수를 입력, 소수이면 '소수',아니면'소수 아님'범위를 벗어나면 '잘못 '출력하기 (if~elif~else,and,or 활용)
#2. 양수 판별하여 결과 판단하기
n = int(input("정수 입력:"))

if n<1 or n > 10:
    print(f"{n}은 잘못된 입력입니다.")
elif n==2 or n==3 or n==5 or n==7:
    print(f"{n}은 소수입니다.")
else:
    print(f"{n}은 소수가 아닙니다.")
