# Sesión 6 - Las clases predefinidas y construídas

* Las búsquedas en las expresiones regulares funcionan en múltiplos de la cantidad de caracteres que explícitamente indicamos.

## Dígitos: \d

* Encuentra todos los dígitos de 0 a 9.

* **\d** es equivalente a poner [0-9].

* Si en vez de **\d**, usamos por ejemplo [0-2] nos encontrará solamente los dígitos de 0 a 2.

* Podemos usar **\D** para encontrar justo lo contrario, todo lo que no son dígitos.

## Palabras: \w

* Encuentra todo lo que puede ser parte de una palabra, tanto letras (minúsculas o mayúsculas) como números.

* **\w** es equivalente a poner [a-zA-Z0-9_].

* Si en vez de **\w**, usamos por ejemplo [a-zA-Z] nos encontrará solamente las letras.

* Podemos usar **\W** para encontrar justo lo contrario, todos los caracteres que no son parte de palabras.

## Espacios: \s

* Encuentra todos los espacios (los saltos de línea también son espacios).

* Podemos usar **\S** para encontrar justo lo contrario, todo lo que no son espacios.

**NOTA** &rarr; En Visual Studio Code los saltos de línea se buscan con **\n**.

## Reto 

* Hacer una expresión que busque todos los números hexadecimales en el archivo liners.txt. 

** Solución ** &rarr; `#([a-fA-F0-9]{3}){1,2}$`