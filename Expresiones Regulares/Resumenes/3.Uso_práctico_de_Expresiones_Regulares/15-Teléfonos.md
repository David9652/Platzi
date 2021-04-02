# Sesión 15 - Teléfonos

* De acuerdo a las siguientes líneas:

	* 555658
	* 56-58-11
	* 56.58.11
	* 69 87 80
	* 87 78 87#123
	* 76j67k78
	* 555658e123
	* 555658p122
	* +521765678
	* 56-58-11-12-34
	* 56.58.11.12.33
	* 302-345-9876
	* 302-345-98-76

* Definir un patrón que haga match a los números teléfonicos de 6 dígitos, teniendo en cuenta que estos pueden tener una extensión o el código del país (México).

**Solución**

* El primer paso fue identificar la expresión que hiciera match con números de 6 dígitos que pueden o no estar separados por guiones, puntos, espacios, etc.

	* `(\d{2}[.-\s]?){3,3}`

* El segundo paso fue realizar una expresión que identificara el patrón de una extensión, pausa, etc.

	* `([#pe]\d{3})?`

* El tercer paso fue hacer una expresión regular que hiciera match con el código del país.

	* `(\+?521)?`

* Finalmente, se unieron todas las expresiones regulares en una sola, añadiendo los caracteres que identificar el inicio y final de una línea.

	* `^(\+?521)?(\d{2}[.-\s]?){3,3}([#pe]\d{3})?$}`