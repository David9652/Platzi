# Sesión 8 - Power Tools: Comandos Poderosos de Búsqueda

* Hay muchas herramientas que pueden hacer cosas muy diferentes dentro de la terminal, y cada una de estas tiene también un montón de opciones. Estas son algunas de las más poderosas.

## grep

*  Ayuda a encontrar cadenas de caracteres dentro de todos los archivos de la ruta que le demos, con expresiones regulares.

* **grep [opciones] -e [expresión regular] [archivo]** &rarr; `$grep -r . -e test` - `$grep "console" test.js`
	* -r &rarr; Recursivo.
	* -n &rarr; Número de línea donde se encuentra la palabra en el archivo.
	* -e &rarr; Expresión regular.
	* -i &rarr; No importa si es mayúscula o minúscula.
	* -l &rarr; Trae solamente el nombre de los archivos.

## find

* Busca cadenas de caracteres en los nombres de archivos (metadata).

* **find [ruta] -name [nombre]** &rarr; `$find / -name *.js` (devuelve todos los archivos que terminan con .js).

## wc (Word Count)

* El programa lee la entrada estándar o una lista concatenada y genera una o más de las siguientes estadísticas: conteo de líneas, conteo de palabras, y conteo de bytes. Si se le pasa como parámetro una lista de archivos, muestra estadísticas de cada archivo individual y luego las estadísticas generales.

* **wc [opciones]** &rarr; `$wc -l`

	* -l &rarr; Número de líneas.
	* -c &rarr; Número de bytes.
	* -m &rarr; Imprime el número de caracteres.
	* -L &rarr; Imprime la longitud de la línea más larga.
	* -w &rarr; Imprime el número de palabras.

* **date** &rarr; Muestra la fecha actual.

* **time** &rarr; Tiempo del procesador.