# Sesión 8 - Definir funciones con Python

* En el contexto de la programación, las **funciones** son simplemente una agrupación de enunciados (statements) que tienen un nombre. Una **función** tiene un nombre, debe ser descriptivo, puede tener parámetros y puede regresar un valor después que se generó el cómputo.

* Python es un lenguaje que se conoce como **batteries include** (baterías incluidas) esto significa que tiene una librería estándar con muchas funciones y librerías.

* Para declarar funciones que no son las globales, las [**built-in functions**](https://docs.python.org/3/library/functions.html "**built-in functions**"), necesitamos importar un módulo.

* [Estándares en Python](https://www.datacamp.com/community/tutorials/pep8-tutorial-python-code "Estándares en Python").

* Con el keyword **def** declaramos una función.`

## Ejemplo 

```python
# Funciones
def sumar_dos_numeros (x,y):
	return x+y
suma = sumar_dos_numeros (3,5)
print (suma)
# Funciones Lambda
sumar_tres_numeros = lambda x, y, z: x+y+z
suma2 = sumar_tres_numeros(2,3,4)
print (suma2)
```