# Sesión 32 - Dictionary comprehension y List comprehension

* [Dictionary comprehension y list comprehension](https://python-3-patterns-idioms-test.readthedocs.io/en/latest/Comprehensions.html "Dictionary comprehension y list comprehension") nos permite escribir listas o diccionarios de forma más sencilla.

* Sets comprehension también está soportado.

## Números pares - List Comprenhension
```python
pares = []

for num in range(1,31):
    if num % 2 == 0:
        pares.append(num)

# Syntactic Sugar
# el mismo codigo en una sola linea para listas
pares = [num for num in range(1,31) if num % 2 == 0]
```

## Números al cuadrado - Dictionary Comprenhension
```python
cuadrados = {}
for num in range(1, 11):
  cuadrados[num] = num ** 2

print(cuadrados)

# Syntactic Sugar
# el mismo codigo en una sola linea para diccionario
squares = {num: num ** 2 for num in range(1, 11)}
print(squares)
```