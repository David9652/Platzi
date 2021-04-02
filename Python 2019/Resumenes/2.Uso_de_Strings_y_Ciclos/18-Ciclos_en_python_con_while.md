# Sesión 18 - Ciclos en Python con while

* Otra forma de hacer iteraciones es con el **while loop**, éste ciclo se ejecuta MIENTRAS la condición se evalúe como verdadera, el ciclo termina cuando la evaluación resulta en falso.

* En este tipo de ciclo es muy importante definir la condición de parada, si no el ciclo puede ejecutarse hasta el infinito y consumir todos los recursos de la maquina.

## Ejemplo While Loop

```python
import random

def run():
    number_found = False
    max_limit = int(input('Ingresa el máximo número：'))

    random_number = random.randint(0, max_limit)

    while not number_found:
        number = int(input('Intenta un número：'))

        if number == random_number:
            print('Felicidades. Encontraste el número')
            number_found = True
        elif number > random_number:
            print('El número es más pequeño')
        else:
            print('El número es más grande')

if __name__ == '__main__':
    run()
```

* [Qué son las f-strings en Python](https://platzi.com/blog/f-strings-en-python/ "Qué son las f-strings en Python")

**NOTA** &rarr; Para detener la ejecución de un ciclo, puede utilizar CTRL + C en la consola.
