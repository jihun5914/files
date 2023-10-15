a= range(1,10)
#출력할 구구단을 입력받는다.(dan)
dan = int(input("출력할 구구단:"))
#입력받은 단을 출력한다.
for i in a:
    print(f"{dan}*{i}={dan*i}")
