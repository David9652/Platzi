# Sesión 17 - Ciclos en Python con for

* Cuando necesitamos realizar operaciones sobre una serie de datos podemos utilizar iteraciones.

## Función range

* La función **range** nos permite generar un rango a partir de un número

```python
range(5) # [0,1,2,3,4]
range(5, 40, 3)
```

## Iteraciones con for

* **for** nos permite recorrer un arreglo, asignando cada valor a una variable que decidas

```python
for i in range(5):
    print(i)
```

* Podemos operar los valores usando también condiciones, en este caso solo queremos elevar al cuadrado, los valores que sean divisibles por 3

```python
for i in range(30):
  if i % 3 != 0:
    continue
  else:
    print(i**2)
```

* La palabra reservada **continue** permite saltar a la siguiente iteración del ciclo y **break** permite salirse del ciclo.