# Sesión 38 - Decoradores en Python

* Un decorador es una función que recibe otra función y regresa una tercera función.

* Para reconocer un decorador, puedes ver que tienes un arroba sobre la declaración de una función.

## Ejemplo Decorador
```python
def protected(func):

    def wrapper(password):

        if password == 'platzi':
            return func()
        else:
            print('La contraseña es incorrecta')

    return wrapper

@protected
def protected_func():
    print('Tu contraseña es correcta.')

if __name__ == '__main__':
    password = str(input('Ingresa tu contraseña: '))

    protected_func(password)
```
* [Decoradores](https://recursospython.com/guias-y-manuales/decoradores/ "Decoradores")

* [Decoradores por funciones y métodos](https://legacy.python.org/dev/peps/pep-0318/ "Decoradores por funciones y métodos")

* [Decoradores en Python - Video](https://www.youtube.com/watch?v=DQXm6bIZgvk "Decoradores en Python - Video")