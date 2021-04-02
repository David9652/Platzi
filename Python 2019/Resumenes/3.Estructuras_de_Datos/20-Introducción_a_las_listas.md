# Sesión 20 - Introducción a las listas en Python

* Los strings son una secuencia de caracteres, cuando hablamos de **listas** podemos hablar de secuencias de cualquier cosa, por ejemplo listas de números, listas de strings, listas de objetos mas complejos con tipos propios etc.

* Una **lista** es una secuencia de elementos, para crearlas usamos corchetes [] o con la función **list**.

* Las **listas** se pueden acceder a través de indices, éstos indices inician en cero (0)

```python
amigos = list()
numeros = [1,2,3,4,5]
```

* Las **listas** son mutables, para añadir elementos a una lista podemos utilizar el método **append**.

* Las listas se pueden acceder con indices, que inician en cero.

```python
amigos=list()
amigos.append('Pedro')
amigos[0]
'Pedro'

amigos.append('Enrique')
amigos[1]
'Enrique'
```
## Ejemplo Listas

```python
def average_temps(temps):
    sum_of_temps = 0

    for temp in temps:
        sum_of_temps += temp

    return sum_of_temps / len(temps)

if __name__ == '__main__':
    temps = [21, 24, 24, 22, 20, 23, 24]

    average = average_temps(temps)

    print(f'La temperatura promedio es: {average}')
```