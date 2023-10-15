import turtle
t=turtle.Turtle()
t.shape('turtle')

#함수정의하고 호출하기

#함수 정의
#-----------------------------------
def drawPolygon(n,length=20):
        turnAngle = 360 / n
        
        for i in range(n):
            t.fd(length)
            t.left(turnAngle)
#----------------------------------------------
  
drawPolygon(50)
