#그릴 다각형 수를 입력받는다.
n= int(input("몇 각형을 그릴까요:"))
#그릴 다각형의 한 변의 길이를 입력받는다.
side = int(input("한변의 길이:"))
#변 하나 그린 후에 방향 변화 크기를 계산한다.
turnAngle=360/ n
#반복할 획수를 저장하는 시퀀스 생성
count=range(n)
#다각형을 그린다
import turtle
t=turtle.Turtle()
t.shape("turtle")
for i in count:
    t.forward(side)
    t.left(turnAngle)
