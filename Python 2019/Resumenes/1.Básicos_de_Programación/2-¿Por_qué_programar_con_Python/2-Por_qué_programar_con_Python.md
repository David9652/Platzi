# Sesión 2 - ¿Por qué programar con Python?

* Python es uno de los mejores lenguajes para principiantes porque tiene una sintaxis clara, una gran comunidad y esto hace que el lenguaje sea muy amigable para los que están iniciando.

* Python está diseñado para ser fácil de usar, a diferencia de otros lenguajes donde la prioridad es ser rápido y eficiente. Python no es de los lenguajes más rápidos, pero casi nunca importa.

* Es el tercer lenguaje, según Github, entre los más populares. En StackOverflow se comenta que es uno de los lenguajes que mayor popularidad esta obteniendo.

* "Python cuando podamos, C++ cuando necesitemos"

	* **python(3) --version** &rarr Para conocer la versión que tenemos instalada.
	* **python(3) [nombre del archivo]** &rarr; Para ejecutar nuestro programa.

## ¿Que es python?

* Python es un lenguaje de programación interpretado de tipado dinámico cuya filosofía hace hincapié en una sintaxis que favorezca un código legible. Se trata de un lenguaje de programación multiparadigma y disponible en varias plataformas.

### Interpretado

* Se ejecuta sin necesidad de ser procesado por el compilador y se detectan los errores en tiempo de ejecución.

### Multiparadigma

* Soporta programación funcional, programación imperativa y programación orientada a objetos.

### Tipado dinámico

* Las variables se comprueban en tiempo de ejecución.

### Multiplataforma

* Disponible para plataformas de Windows, Linux o MAC.

## Python Turtle Graphics

* Es un módulo de programación gráfica para Python utilizado como método para enseñar programación a través de coordenadas relativas.

* La tortuga es un objeto al cual se le puede dar órdenes de movimiento (avance, retroceso, giro, etc). Moviendo adecuadamente la tortuga se puede conseguir dibujar todo tipo de figuras. La tortuga dispone de 3 atributos esenciales:

	* **Posición** &rarr; Respecto al centro de coordenadas.
	* **Orientación** &rarr; Dirección hacia donde mira la tortuga.
	* **Pluma** &rarr; Rastro que puede dejar la tortuga al desplazarse

* Las funciones principales para animar nuestro objeto son las siguientes:

	* **forward (distance)** &rarr; Avanzar una determinada cantidad de píxeles.
	* **backward (distance)** &rarr; Retroceder una determinada cantidad de píxeles.
	* **left (angle)** &rarr; Girar hacia la izquierda un determinado ángulo.
	* **right (angle)** &rarr; Girar hacia la derecha un determinado ángulo.

### Ejemplo

```python
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
```

* **NOTA** &rarr; JavaScript es un lenguaje 100% interpretado, el interprete corre en el navegador web, por esto no necesitas instalar algo adicional para ejecutar código JavaScript mas allá de un navegador web y un editor de texto. Por otra parte, tenemos a Python que es un lenguaje semi interpretado, el cual necesita un programa que convierta el código a lenguaje de maquina (bytecode). Este interprete de python viene instalado por defecto en distribuciones de sistemas operativos Linux y Mac, en Windows si es necesario instalarlo.