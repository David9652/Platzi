# Sesión 7 - Declarar variables y expresiones

* Las **variables** nos permiten guardar valores, permitiéndonos reutilizarlos en diferentes partes del código y haciendo nuestros programas más legibles.

* El valor que contiene una **variable** puede ser reasignado, significa que podemos asignarle diferentes valores a una misma variable.

* Las variables tienen algunas limitantes, por ejemplo:

    * Tienen que tener un nombre significativo, es decir, que nos digan qué están haciendo.

    * No podemos usar palabras reservadas del lenguaje como nombres para nuestras variables (class, false, none, true, etc).

* Para definir una variable escribes el nombre que quieres asignarle y con = defines el valor que va a almacenar, por ejemplo:

```python
pi = 3.14159
radio =3
area = pi * radio**2
print(area)
```
## Ejemplo Saludo

```python
name = str(input('¿Cuál es tu nombre?'))
print('Hola, ' + name + '!')
```