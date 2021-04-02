# Sesión 5 - Operadores matemáticos en Python

## Operadores Matemáticos

* En programación estos operadores son muy similares a nuestras clases básicas de matemáticas.

| Operador  | Descripción  | Ejemplo | Resultado |
|:------------:|:---------------:|:-----:|:-----:|
| + | Suma | 2 + 1 | 3 |
| - | Resta | 6 - 4 | 2 |
| * | Multiplicación | 3 * 4 | 12 |
| / | División Flotante | 5  / 2 | 2.5 |
| // | División Entera | 5 / 2 | 2 |
| % | Módulo (Residuo División) | 5 / 2 | 1 |
| ** | Exponente | 2**8 | 256 |

## Operadores de Asignación

* Los operadores de asignación se utilizan para básicamente asignar un valor a una variable, así como cuando utilizamos el “=”.

| Operador  | Asignación  | Ejemplo | Resultado |
|:------------:|:---------------:|:-----:|:-----:|
| = | Asignación | a=3 | 3 |
| += | Suma a la variable del lado izquierdo el valor del derecho | a=3; a+=5| 8 |
| -= | Resta a la variable del lado izquierdo el valor del derecho | a=8; a-=5 | 3 |
| *= | Multiplica a la variable del lado izquierdo por el valor del derecho | a=3; a*=5 | 15 |
| /= | Divide (Flotante) a la variable del lado izquierdo por el valor del derecho| a=15; a/=6 | 2.5 |

## Operadores lógicos

* Sirven para realizar comparaciones, devuelven un valor verdadero o falso.

| Operador  | Descripción  | Ejemplo | Resultado |
|:------------:|:---------------:|:-----:|:-----:|
| and | ¿Se cumple a y b? | a=3; b=5; 4>a & 4<b | True |
| or | ¿Se cumple a o b? | a=3; b=5; 2>a || 4<b | True |
| not | Negado | a=True; b=!a | False |

* Los resultados pueden ser **True** o **False**.

## Operadores relacionales

* Comparan dos expresiones y devuelven un valor verdadero o falso.

| Operador  | Descripción  | Ejemplo | Resultado |
|:------------:|:---------------:|:-----:|:-----:|
| == | ¿Son iguales a y b?	 | a=3; b=5; a==b | False |
| != | ¿Son distintos a y b? | a=3; b=5; a!= | True |
| < | ¿Es a menor que b? |  a=3; b=5; a<b | True |
| > | ¿Es a mayor que b? |  a=3; b=5; a>b | False |
| <= | ¿Es a menor o igual que b?|  a=3; b=3; a<=b  | True |
| >= | ¿Es a mayor o igual que b? |  a=4; b=3; a>=b | True |

* Los resultados pueden ser **True** o **False**.

**NOTA** &rarr; Los operadores son contextuales, dependen del tipo de valor. Un valor es la representación de una entidad que puede ser manipulada por un programa.

* Podemos conocer el tipo del valor con **type()** y nos devolverá algo similar a **class init**, **class float**, **class str**. Dependiendo del tipo los operadores van a funcionar de manera diferente.