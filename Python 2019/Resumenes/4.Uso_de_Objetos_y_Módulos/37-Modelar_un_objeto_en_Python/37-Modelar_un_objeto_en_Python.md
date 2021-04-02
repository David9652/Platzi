# Sesión 37 - Modelar un objeto en Python

## Ejemplo
### main.py
```python
from lamp import Lamp

def run():
    lamp = Lamp(is_turned_on=False)

    while True:
        command = str(input('''
            ¿Qué deseas hacer?

            [p]render
            [a]pagar
            [s]alir
        '''))

        if command == 'p':
            lamp.turn_on()
        elif command == 'a':
            lamp.turn_off()
        else:
            break

if __name__ == '__main__':
    run()
```

## lamp.py
```python
class Lamp:
    _LAMPS = ['''
          .
     .    |    ,
      \   '   /
       ` ,-. '
    --- (   ) ---
         \ /
        _|=|_
       |_____|
    ''',
    '''
         ,-.
        (   )
         \ /
        _|=|_
       |_____|
    ''']

    def __init__(self, is_turned_on):
        self.__is_turned_on = is_turned_on

    def turn_on(self):
        self.__is_turned_on = True
        self.__display_image()

    def turn_off(self):
        self.__is_turned_on = False
        self.__display_image()

    def __display_image(self):
        if self.__is_turned_on:
            print(self._LAMPS[0])
        else:
            print(self._LAMPS[1])
```
## Información Adicional

* [PEP 8 — the Style Guide for Python Coder](https://www.python.org/dev/peps/pep-0008/ "PEP 8 — the Style Guide for Python Coden")

* [Argumentos args y kwargs](https://recursospython.com/guias-y-manuales/argumentos-args-kwargs/ "Argumentos args y kwargs")

* [Private methods in Python](https://www.geeksforgeeks.org/private-methods-in-python/ "The Meaning of Underscores in Python")

* [The Meaning of Underscores in Python](https://dbader.org/blog/meaning-of-underscores-in-python#:~:text=A%20double%20underscore%20prefix%20causes,the%20class%20is%20extended%20later "The Meaning of Underscores in Python")

* [More information about double underscore in Python](https://stackoverflow.com/questions/1301346/what-is-the-meaning-of-single-and-double-underscore-before-an-object-name "More information about double underscore in Python")

* [__dict__ attribute explained](https://stackoverflow.com/questions/19907442/explain-dict-attribute "__dict__ attribute explained")

* [Tricks of Python](https://www.youtube.com/watch?v=VBokjWj_cEA "Tricks of Python")

* [Herencia en Python](https://riptutorial.com/es/python/example/1399/herencia-basica "Herencia en Python")

* [Classes in Python](https://docs.python.org/3/tutorial/classes.html "Classes in Python")

* [Absolute and Relative imports in Python](https://realpython.com/absolute-vs-relative-python-imports/l "Absolute and Relative imports in Python")