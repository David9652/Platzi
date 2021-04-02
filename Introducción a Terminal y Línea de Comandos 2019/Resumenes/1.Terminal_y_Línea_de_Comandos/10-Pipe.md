# Sesión 10 - Pipe

* Sirve para encadenar el standard output de un comando con el standard input de otro comando.

	* `$ls -l | wc -l` &rarr; Muestra cantidad de lineas del output.

	* `$cat peliculas.csv | grep [patrón]` &rarr; Devuelve las lineas que cumplen con el patrón.

	* `$ cat peliculas.csv | more` &rarr; Muestra la lista de resultados por páginas.

## awk 

* Es un comando poderoso que permite procesar o analizar archivos de texto, generalmente es usado para archivos que están organizados por filas y columnas (csv).

* **awk [opciones] [imprimir]** &rarr; `$awk -F"::"'{printf("%s:%s\n", $2, $3)}'`

	* **-F** &rarr; Indica cuál es el separador que se va a usar para separar la linea de código.

	* **::** &rarr; Indica que ese es el separador que se va usar, por eso va después del -F.

	* **{printf("%s:%s\n", $2, $3)}** &rarr; Indica el número de la columna que va a imprimir, en este caso son las columnas 2 y 3 separadas por un :