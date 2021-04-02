from turtle import Screen, Turtle

def star(Screen, Turtle):
    tortuga.speed(10) # Velocidad del Trazo
    screen.colormode(255) # Establecer Modo RGB
    tortuga.fillcolor((100, 193, 143)) # Establecer Color Relleno
    tortuga.begin_fill() 
    while True:
        tortuga.forward(200)
        tortuga.left(170)
        print(tortuga.pos())
        print(abs(tortuga.pos()))
        if abs(tortuga.pos()) < 0.001: # Valor Absoluto del Vector 2D 
            break
    tortuga.end_fill()

screen = Screen() # Instanciar Screen
print(type(screen))
tortuga = Turtle() # Instanciar Tortuga
print(type(tortuga))
star(screen,tortuga)
screen.mainloop()