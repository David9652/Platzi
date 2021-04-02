# Sesión 11 - Reto: Filtrando letras en números telefónicos utilizando negaciones

* De acuerdo a las siguientes líneas:

	* 555658
	* 56-58-11
	* 56.58.11
	* 56.78-98
	* 65 09 87
	* 76y87r98 65 09 87 76y87r98
	* 12&21&12
	* 12#21#12

* Definir un patrón que haga match a todas las líneas excepto a la sexta línea que tiene letras, es decir, seleccionar todas sin importar el caracter de separación, excepto cuando los números están separados entre sí por letras.

	* `(\d{2,2}[^a-zA-Z]?){3}`

	* `(\d+?[^a-z]){3}`

	* `((?<![a-z])(\d{2,2})[^a-z]?){3}}`

* La última expresión utiliza una técnica llamada **Positive and Negative Lookbehind**, esto indica que solo hará match si lo que está detrás no es una letra de la a-z (puede ser tan preciso como se requiera). Para más información, consultar el siguiente enlace: https://www.regular-expressions.info/lookaround.html.