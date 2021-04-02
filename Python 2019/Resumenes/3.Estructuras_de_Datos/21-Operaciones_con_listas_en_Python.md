# Sesión 21 - Operaciones con listas en Python

* Cuando trabajamos con listas podemos también hacer operaciones por ejemplo

## Unir listas

```python
my_lista = [1]

my_lista2 = [2,3,4]

my_lista3 = my_lista + my_lista2

my_lista3 # [1,2,3,4]
```

## Multiplicar elementos

```python
my_lista = ['a']
my_lista2 = my_lista * 5
my_lista2 # ['a','a','a','a','a']
```

## Dividir listas

```python
my_lista = [1,2,3,4,5]
my_lista_reversed = my_lista[::-1]
my_lista_reversed # [5,4,3,2,1]
```

## Eliminar último elemento de la lista

```python
my_lista = [1,2,3,4,5]
my_lista = my_lista.pop()
my_lista # [1,2,3,4]
```

## Ordenar la lista

```python
my_lista = [2,1,5,4,3]
my_lista = my_lista.sort()
my_lista # [1,2,3,4,5]
```
## Eliminar un elemento

```python
my_lista = [1,2,3,4,5]
del my_lista[0]
my_lista # [2,3,4,5]
```