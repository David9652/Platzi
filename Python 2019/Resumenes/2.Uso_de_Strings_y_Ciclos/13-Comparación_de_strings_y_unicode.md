# Sesión 13 - Comparación de strings y unicode

* Los strings tienen una característica muy importante: son inmutables, esto quiere decir que no se pueden cambiar después de que se han declarado.

* Si quieres modificar el texto de un string debes definir un nuevo string y modificarlo usando funciones como slice.

## Comparación de strings

* Se pueden realizar operaciones con strings, por ejemplo comparar si son iguales o mayores o menores.

## Diferencia entre ASCII y Unicode

* Los caracteres también son números, para esto existen estándares que asignan un número a cada carácter, para generar un estándar se creó el ASCII pero esta solo toma en cuenta los caracteres en inglés, para dar soporte a más lenguajes se crea UNICODE.

* Python 2 codifica en ASCII por default, para cambiarlo por UNICODE debemos colocar u antes del string.