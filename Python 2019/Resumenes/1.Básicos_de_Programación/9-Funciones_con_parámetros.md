# Sesión 9 - Funciones con parámetros

* Los nombres no pueden comenzar con digitos.

* No pueden utilizar una palabra reservada.

* Las variables deben tener diferentes nombres.

* Los nombres de las funciones deben ser descriptivas de lo que hacen las funciones.

## Imprimir valor de variable

* Para poder imprimir el valor de una variable dentro de un string podemos hacerlo así:

```python
'${} pasos mexicanos son ${} pesos mexicanos'.format(ammount, result)
```
## Declarar vs Ejecutar

* Declarar una función es escribir su estructura.

* Ejecutar una función es llamar la función y ejecutar su código.

## ¿Dónde se puede acceder a las variables?

* **Scope de las variables**, cada vez que una función se ejecuta se genera un contenedor donde las variables de la función van a vivir, una vez se sale de la función estas variables no van a existir.

## Ejemplo Calculadora de Divisas

```python
def foreign_exchange_calculator(ammount):
    mex_to_col_rate = 162.66

    return mex_to_col_rate * ammount

def run():
    print('C A L C U L A D O R A  D E  D I V I S A S')
    print('Convierte pesos mexicanos a pesos colombianos.')
    print('')

    ammount = float(input('Ingresa la cantidad de pesos mexicanos que quieres convertir: '))

    result = foreign_exchange_calculator(ammount)

    print('${} pesos mexicanos son ${} pesos colombianos'.format(ammount, result))
    print('')

if __name__ == '__main__':
    run()
    print('Final {}')
```