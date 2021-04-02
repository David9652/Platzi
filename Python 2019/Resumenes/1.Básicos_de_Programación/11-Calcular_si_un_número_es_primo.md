# Sesión 11 - Calcular si un número es primo

* Se construirá un programa que nos permite determinar si un número es primo o no, usando expresiones booleanas, operadores relacionales y operadores lógicos.

## Ejemplo Número Primo

```python
def is_prime(number):
    if number < 2:
        return False
    else:
        for i in range(2,number):
            if number != i and number % i == 0:
                return False
        return True

def run():
#   user_number = int(input('Escribe un número: ')) Uncomment this and comment 'for' to an user enter a number.
    for user_number in range(1,501):
        result = is_prime(user_number)
        if result:
            print('El número {} es primo'.format(user_number))
        else:
        #   print('El número {} NO es primo'.format(user_number))
            pass

if __name__ == '__main__':
    run()
```