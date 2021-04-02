# Sesión 23 - Interfaz del Ahorcado

* Las variables globales, van a poder ser accedidas en cualquier parte del programa.

* Cuando en Python definimos una constante, por convención las definimos escribiendo el nombre con mayúscula.

* Para definir las imágenes del ahorcado usamos [ASCII Art](https://en.wikipedia.org/wiki/ASCII_art "ASCII Art")

## Ejemplo Interfaz del Ahorcado
```python
from random_word import RandomWords

IMAGES = ['''

    +---+
    |   |
        |
        |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
        |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
    |   |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
   /|   |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
   /|\  |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
   /|\  |
    |   |
        |
        =========''', '''

    +---+
    |   |
    O   |
   /|\  |
    |   |
   /    |
        =========''', '''

    +---+
    |   |
    O   |
   /|\  |
    |   |
   / \  |
        =========''', '''
''']


def display_board(hidden_word, tries):
    print(IMAGES[tries])
    print('')
    print(hidden_word)
    print('--- * --- * --- * --- * --- * --- ')
    print(f"{tries}/7")

def run():

    word = str(RandomWords().get_random_word())
    hidden_word = ['-'] * len(word)
    tries = 0

    while True:
        display_board(hidden_word, tries)
        current_letter = str(input('Escoge una letra: '))


if __name__ == '__main__':
    print('B I E N V E N I D O S  A  A H O R C A D O S')
    run()
```