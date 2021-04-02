# Sesión 30 - Se repite una letra en un string - Programa con tuplas

* Se construirá un programa que nos permita encontrar el primer carácter que no se repite en un string.

* Por ejemplo, si tenemos el string **mimamameama** el primer carácter que no se repite es la i.

## Ejemplo Detallado
```python
"""
"abacabad" c
"abacabaabacaba" _
"abcdefghijklmnopqrstuvwxyziflskecznslkjfabe" d
"bcccccccccccccyb" y
"""

def first_not_repeating_char(char_sequence):
    seen_letters = {}

    #  Enumerate 
    # The enumerate() method takes two parameters:
    # Parameters
    # iterable - a sequence, an iterator, or objects that supports iteration
    # start (optional) - enumerate() starts counting from this number. If start is omitted, 0 is taken as start.
    # Return
    # The enumerate() method adds counter to an iterable and returns it. The returned object is a enumerate object.
    # https://www.programiz.com/python-programming/methods/built-in/enumerate

    for idx, letter in enumerate(char_sequence):
        if letter not in seen_letters:
        # https://www.tutorialspoint.com/python3/python_basic_operators.htm
        # https://geek-university.com/python/membership-operators/#:~:text=The%20membership%20operators%20in%20Python,a%20substring%20in%20a%20string.&text=in%20%E2%80%93%20evaluates%20to%20True%20if,found%20in%20the%20right%20operand.
            seen_letters[letter] = (idx, 1)
        else:
            seen_letters[letter] = (seen_letters[letter][0], seen_letters[letter][1] + 1)
    print(seen_letters)

    final_letters = []
    for key, value in seen_letters.items():
        if value[1] == 1:
            final_letters.append( (key, value[0]) )
    print(final_letters)

    #https://docs.python.org/3/howto/sorting.html
    #lambda value: value[1]
    #def sort(value):
    #   return value[1]
    not_repeated_letters = sorted(final_letters, key=lambda value: value[1])
    print(not_repeated_letters)

    if not_repeated_letters:
        return not_repeated_letters[0][0]
    else:
        return '_'

if __name__ == '__main__':
    char_sequence = str(input('Escribe una secuencia de caracteres: '))

    result = first_not_repeating_char(char_sequence)

    if result == '_':
        print('Todos los caracteres se repiten.')
    else:
        print(f'El primer caracter no repetido es: {result}')
```

## Ejemplo Optimizado 

* Tener en cuenta que desde la versión de Python 3.6, los [diccionarios guardan el orden de inserción](https://stackoverflow.com/questions/39980323/are-dictionaries-ordered-in-python-3-6 "diccionarios guardan el orden de inserción"). Así que el código optimizado sería de la siguiente manera:

```python
def first_not_repeating_char(char_sequence):
    seen_letters = {}

    for letter in char_sequence:
        if letter not in seen_letters:
            seen_letters[letter] = 1
        else:
            seen_letters[letter] += 1

    for key, value in seen_letters.items():
        if value == 1:
            return key
    return '_'

if __name__ == '__main__':
    char_sequence = str(input('Escribe una secuencia de caracteres: '))

    result = first_not_repeating_char(char_sequence)

    if result == '_':
        print('Todos los caracteres se repiten.')
    else:
        print(f'El primer caracter no repetido es: {result}')
```

## Ejemplo Optimizado Función Count

```python
def first_not_repeating_char(char_sequence):
    
    for letter in char_sequence:
        if char_sequence.count(letter) == 1:
            return letter
    return '_' 

if __name__ == '__main__':
    char_sequence = str(input('Escribe una secuencia de caracteres: '))

    result = first_not_repeating_char(char_sequence)

    if result == '_':
        print('Todos los caracteres se repiten.')
    else:
        print(f'El primer caracter no repetido es: {result}')
```