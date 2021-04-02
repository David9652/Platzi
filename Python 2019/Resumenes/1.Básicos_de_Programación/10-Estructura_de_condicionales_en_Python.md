# Sesión 10 - Estructura de condicionales en Python

* Uno de las cosas más poderosas en programación es controlar el flujo de ejecución, para esto utilizamos condicionales.

* Las condicionales son sentencias que devuelven un valor booleano (True, False).

## Operadores Relacionales

+ == Es igual
+ != Es diferente
+  \> Es mayor
+ \>= Es mayor o igual
+ < Es menor
+ <= Es menor o igual

## Operadores Lógicos

+ and
+ or
+ not

## Ejemplo

```python
def say_hello(age):
    if age > 18:
        print('Hola senor')
    else:
        print('Hola nino')

say_hello(20)
say_hello(14)
```