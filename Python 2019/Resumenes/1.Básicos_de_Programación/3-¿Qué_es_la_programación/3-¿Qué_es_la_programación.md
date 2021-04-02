# Sesión 3 - ¿Qué es la programación?

* 	Python es uno de los lenguajes más emocionantes de la actualidad y puedes lograr muchas cosas con él. Este curso te va a servir como una introducción al lenguaje.

## ¿Qué es la programación?

* Es una disciplina que combina parte de otras disciplinas como las Matemáticas, Ingeniería y la Ciencia. Sin embargo, la habilidad más importante es resolver problemas. Es lo que harás todos los días como programador o programadora.

* La programación es una secuencia de instrucciones que le damos a la computadora para que haga lo que nosotros deseamos. Podemos construir una aplicación web, móvil, un programa que lleve cohetes a la luna o marte, resolver problemas de finanzas.

* La estructura de un programa. Casi todos los programas tienen un input, output, operaciones matemáticas, ejecución condicional y repeticiones.

## Ejemplo Turtle

```python
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
tortuga = Turtle() # Instanciar Tortuga
print(dir(screen))
star(screen,tortuga)
screen.mainloop()
```