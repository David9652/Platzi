# Sesión 29 - grep y find desde consola

* En los sistemas operativos basados en UNIX podemos utilizar expresiones regulares en la consola mediante los comandos grep y find.

	* **grep**&rarr; Nos ayuda a buscar dentro de los archivos, textos muy puntuales utilizando una versión muy reducida de expresiones regulares.

	* **find**&rarr; Se utiliza para encontrar archivos en un determinado directorio a partir de diversas reglas de búsqueda que incluyen expresiones regulares.

* Teniendo en cuenta el archivo results.csv, realizar una expresión regular que identifique los partidos que ha jugado Colombia o que ha sido sede, y mostrar en pantalla en los que se han anotado 7 goles como local o visitante.

* `$ cat results.csv | grep Colombia | grep ^.*,7.*`

```
1945-01-28,Colombia,Uruguay,0,7,Copa América,Santiago,Chile,TRUE
1965-08-01,Chile,Colombia,7,2,FIFA World Cup qualification,Santiago,Chile,FALSE
```