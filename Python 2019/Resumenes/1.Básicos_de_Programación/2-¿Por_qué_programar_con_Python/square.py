import turtle

screen = turtle.Screen() # Instanciar Screen
print(type(screen))
tortuga = turtle.Turtle() # Instanciar Tortuga
print(type(tortuga))

tortuga.forward(50)
tortuga.left(90)
tortuga.forward(50)
tortuga.left(90)
tortuga.forward(50)
tortuga.left(90)
tortuga.forward(50)
tortuga.left(90)

screen.mainloop()