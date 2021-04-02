# Sesión 24 - Lógica del ahorcado

* El juego consiste en adivinar palabras ingresando letra por letra, inicialmente lo que haremos es mostrar el tablero del juego y pedir al usuario que ingrese una letra, si la letra esta contenida en la palabra aleatoria del juego se agregará a la lista, en caso contrario se mostrará una nueva parte del ahorcado indicando que ese intento fue fallido.

## Ejemplo Lógica del Ahorcado
```python
from random_word import RandomWords
import os

IMAGES = ['''
.____________________.
| .__________________|
| | / /      
| |/ /       
| | /        
| |/         
| |          
| |          
| |               
| |                
| |              
| |    
| |    
| |    
| |    
| |    
| |    
| |"""""""""""""""""""|-|
| |"""""""""""""""""""| |
| |                   | |
| |                   | |
| |                   | |
''','''
.___________.._______.
| .__________))______|
| | / /      ||
| |/ /       ||
| | /        ||.-''.
| |/         |/  _  .
| |          ||  `/,.
| |          (\\`_.'
| |               
| |                
| |              
| |    
| |    
| |    
| |    
| |    
| |    
| |"""""""""""""""""""|-|
| |"""""""""""""""""""| |
| |                   | |
| |                   | |
| |                   | |
''','''
.___________.._______.
| .__________))______|
| | / /      ||
| |/ /       ||
| | /        ||.-''.
| |/         |/  _  .
| |          ||  `/,.
| |          (\\`_.'
| |         .-`--'.
| |       / Y 
| |      / /  
| |     / /   
| |    (')    
| |          
| |          
| |          
| |          
| |         
| |"""""""""""""""""""|-|
| |"""""""""""""""""""| |
| |                   | |
| |                   | |
| |                   | |
''','''
.___________.._______.
| .__________))______|
| | / /      ||
| |/ /       ||
| | /        ||.-''.
| |/         |/  _  .
| |          ||  `/,.
| |          (\\`_.'
| |         .-`--'.
| |       / Y . . Y \.
| |      / /       \ \.
| |     / /         \ \.
| |    (')           (`).
| |          
| |          
| |          
| |          
| |         
| |"""""""""""""""""""|-|
| |"""""""""""""""""""| |
| |                   | |
| |                   | |
| |                   | |
''','''
.___________.._______.
| .__________))______|
| | / /      ||
| |/ /       ||
| | /        ||.-''.
| |/         |/  _  .
| |          ||  `/,.
| |          (\\`_.'
| |         .-`--'.
| |       / Y . . Y \.
| |      / / |   | \ \.
| |     / /  | . |  \ \.
| |    (')   |   |   (`).
| |
| |
| |
| |
| |
| |"""""""""""""""""""|-|
| |"""""""""""""""""""| |
| |                   | |
| |                   | |
| |                   | |
''','''
.___________.._______.
| .__________))______|
| | / /      ||
| |/ /       ||
| | /        ||.-''.
| |/         |/  _  .
| |          ||  `/,.
| |          (\\`_.'
| |         .-`--'.
| |       / Y . . Y \.
| |      / / |   | \ \.
| |     / /  | . |  \ \.
| |    (')   |   |   (`).
| |          ||'||
| |          || ||
| |          || ||
| |          || ||
| |         / | | \.
| |"""""""""""""""""""|-|
| |"""""""""""""""""""| |
| |                   | |
| |                   | |
| |                   | |
''','''
.___________.._______.
| .__________))______|
| | / /      ||
| |/ /       ||
| | /        ||.-''.
| |/         |/  _  .
| |          ||  `/,.
| |          (\\`_.'
| |         .-`--'.
| |       / Y . . Y \.
| |      / / |   | \ \.
| |     / /  | . |  \ \.
| |    (')   |   |   (`).
| |          ||'||
| |          || ||
| |          || ||
| |          || ||
| |         / | | \.
""""""""""|_`-' `-' |"""|
|"|"""""""\ \       '"|"|
| |        \ \        | |
: :         \ \       : :
. .          `'       . .
'''
]

MAX_ATTEMPTS = len(IMAGES) - 1

def display_board(hidden_word, tries):
    print(IMAGES[tries])
    print('')
    print(hidden_word)
    print(f"{tries}/{MAX_ATTEMPTS}")
    print('--- * --- * --- * --- * --- * --- ')
    
def run():

    word = str(RandomWords().get_random_word(hasDictionaryDef="true"))
    length_word = len(word)
    hidden_word = ['-'] * length_word
    tries = 0

    while True:
        guess = False
        display_board(hidden_word, tries)

        if tries == MAX_ATTEMPTS:
            print('')
            print('G A M E  O V E R')
            print('')
            print(f"Y O U R  W O R D  W A S  {' '.join(word.upper())}")
            break
        else:
            current_letter = str(input('Choose a letter: '))
            for i in range(0,len(word)):
                if current_letter == word[i]:
                    hidden_word[i] = current_letter
                    guess = True
                    if hidden_word == list(word):
                        display_board(hidden_word, tries)
                        print('W E  A R E  T H E  C H A M P I O N S')
                        break

            if not guess:
                tries += 1

if __name__ == '__main__':
    os.system('clear')
    print('W E L C O M E  T O  H A N G M A N')
    run()
```