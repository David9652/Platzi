# Sesión 27 - Diccionarios en Python

* Un **diccionario** es un mapa de valores, los cuales deben tener una llave. Los diccionarios se declaran con (llaves) {} o con la función dict().

* Cuando iteramos en diccionarios podemos hacerlo a través de las llaves, valores o ítems.

## Declarar diccionarios

```python
mi_diccionario = {}
mi_diccionario['primer_elemento'] = 'hola'
mi_diccionario['segundo_elemento'] = 'adios'

calificaciones = {}
calificaciones['Matematica'] = 89
calificaciones['Espanol'] = 80
calificaciones['Algoritmos'] = 90
calificaciones['Ciencias_Sociales'] = 96
calificaciones['Ingles'] = 82
calificaciones['Base de Datos'] = 78
calificaciones['C++'] = 50
calificaciones['C#'] = 67
```

## Iterar en llaves

```python
for key in calificaciones.keys():
    print(key)
```

## Iterar en valores

```python
for value in calificaciones.values():
    print(value)
```

## Iterar en ítems

```python
for key, value in calificaciones.items():
    print(f'llave: {key}, valor: {value}')
```