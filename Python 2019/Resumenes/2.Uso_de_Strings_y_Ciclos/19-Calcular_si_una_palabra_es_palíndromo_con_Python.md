# Sesión 19 - Calcular si una palabra es palíndromo con Python

* Creemos un programa para saber si una palabra es un palíndromo.

## Ejemplo Palabra o Frase Palíndroma

```python
def run():
    word = input('Ingresa una palabra o frase para ver si es palíndroma：')
    word = word.replace(" ", "")
    print(word)
    reverse_word = word[::-1]
    print(reverse_word)
    contador = 1
    lenght_word = len(word)

    for letter in range(0,lenght_word-1):
        if (word[letter] == reverse_word[letter]):
            contador += 1
            if (contador == lenght_word):
                return True
        else:
            return False

if __name__ == '__main__':
    resultado = run()
    if resultado:
        print("Tu palabra o frase es palíndorma")
    else:
        print("Tu palabra o frase NO es palíndorma")
```