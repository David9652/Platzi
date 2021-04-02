def factorial(number):
    if (number-1 == 0):
        return number
    return number * factorial(number-1)

def recursive_sum(number):
    if (number-1 == 0):
        return number
    return number + recursive_sum(number-1)

if __name__ == '__main__':
    while True:
        try:
            number = int(input('Ingresa un número para sacarle su factorial: '))
        except ValueError:
            print(f'Ingrese un número válido.')
        else:
            try:
                factorial_result = factorial(number)
                print(f"El factorial de {number} es: {factorial_result}")
                recursive_sum_result = recursive_sum(number)
                print(f"La suma recursiva de {number} es: {recursive_sum_result}")
            except RecursionError:
                print(f'Ingrese un número igual o menor a 998.')
    # KeyboardInterrupt