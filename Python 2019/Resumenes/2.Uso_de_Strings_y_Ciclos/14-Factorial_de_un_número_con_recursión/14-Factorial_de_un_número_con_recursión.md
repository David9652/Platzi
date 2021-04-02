# Sesión 14 - Factorial de un número con recursión

* Una función está siendo recursiva cuando dentro de el bloque de instrucciones que la conforma se usa a sí misma.

* El concepto puede sonar complicado pero es muy común su uso, por ejemplo cuando haces el calculo del factorial de un número lo haces con una función recursiva.

* El factorial de un número es el número multiplicado por los números antes de el, por ejemplo:

```
5! es 5*4*3*2*1

Esto se puede expresar como

5*fac(4)
4*fac(3)
3*fac(2)
2*fac(1)
1*fac(0)
```

## Ejemplo Python

```python
def factorial(number):
    if number == 0:
        return 1
    else:
        return number * factorial(number-1)

def run():
    user_number = int(input('Ingrese un número para sacarle su factorial: ')) 
    result = factorial(user_number)
    print('El factorial del número {} es: {}'.format(user_number,result))

if __name__ == '__main__':
    run()
```

* [Documentación Python](https://docs.python.org/3/contents.html "Documentación Python")

**NOTA** &rarr; Cuando estes trabajando con recursividad siempre debes pensar en el caso base, es decir debes definir el momento en el que la función dejará de llamarse a si misma, para que no hagas un loop infinito, por ejemplo en el caso del factorial terminas la ejecución cuando llegas a cero.