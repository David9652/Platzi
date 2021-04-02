# Sesión 26 - Implementando Búsqueda Binaria en Python

* Hagamos la implementación del algoritmo de búsqueda binaria en Python.

## Implementación Algoritmo de Búsqueda Binaria
```python
from random import randint

def random_number_list():
    numbers = []
    for i in range(1,randint(2, 100)):
        numbers.append(randint(0, 100))

    print(f"El tamaño de la lista aleatoria no ordenada es : {len(numbers)}")
    numbers = list(set(numbers)) # Remover duplicados y convirtiendo de tipo Set a List
    numbers.sort() # Organizar Lista
    print(f"El tamaño de la lista aleatoria removiendo duplicados y ordenada es: {len(numbers)}")
    return numbers

def binary_search(numbers,number,low,high):
    if low > high:
        return False

    middle_number = (low + high) // 2
    
    if number == numbers[middle_number]:
        print("igual")
        return True
    elif number > numbers[middle_number]:
        print("mayor")
        return binary_search(numbers,number,middle_number+1,high)
    else:
        print("menor")
        return binary_search(numbers,number,low,middle_number-1) 
    
if __name__ == '__main__':
    #generated_numbers = [1,3,5,9,10,11]
    generated_numbers = random_number_list()
    print(generated_numbers)
    number_to_find = int(input('Ingresa un número de 0 a 100：'))
    result = binary_search(generated_numbers, number_to_find, 0, len(generated_numbers)-1)

    if result:
        print(f"El número {number_to_find} fue encontrado en la lista")
    else:
        print(f"El número {number_to_find} NO fue encontrado en la lista")
```