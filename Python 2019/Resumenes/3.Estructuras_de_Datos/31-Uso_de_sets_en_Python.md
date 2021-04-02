# Sesión 30 - Uso de sets en Python

* Los **sets** son muy similares a las listas, pero estas no permiten elementos repetidos, además, no soporta la asignación de elementos.

* Cuando trabajamos con sets, podemos realizar las operaciones básicas de conjuntos, esto quiere decir que se puede calcular los valores de intercepción, diferencia, unión.

## Declarar sets

```python
s = set([1,2,3])
t = set([3,4,5])
```

## Operaciones con sets

```python
s.union(t) # set([1,2,3,4,5]) = s | t
s.intersection(t) # set([3]) = s & t
s.difference(t) # set([1,2]) = s-t
t.difference(s) # set([4,5]) = t-s
s.symmetric_difference(t) # set([1,2,4,5]) = s^t
1 in s # True
1 not in s # False
```