def protected(func):

    def wrapper(password):

        if password == 'ppip ftzi':
            return func()
        else:
            print('La contraseña es incorrecta')

    return wrapper

@protected
def protected_func():
    print('Tu contraseña es correcta.')

if __name__ == '__main__':
    password = str(input('Ingresa tu contraseña: '))

    t=protected_func(password)
    print(t)