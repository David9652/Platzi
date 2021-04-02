# Sesión 18 - Nombres(?) Reto

* De acuerdo a las siguientes líneas:

	* Carlos Angel
	* David3 Garden
	* davox martinez
	* Camila Cabello
	* Dua Lipa
	* eDerson GuTierrez

* Definir un patrón que haga match con los nombres y apellidos de una persona.

**Solución**

* El primer paso fue identificar la expresión regular que validara el nombre y apellido de una persona de Colombia.

	* `[A-ZÁÉÍÓÚ][a-zñáéíóú]{2,10}`

* El segundo paso fue determinar una expresión que hiciera match con más de un nombre y un apellido.

	* `([A-ZÁÉÍÓÚ][a-zñáéíóú]{2,10}\s?){2,5}`

* Finalmente, se unieron todas las expresiones regulares en una sola, añadiendo los caracteres que identificar el inicio y final de una línea.

	* `^([A-ZÁÉÍÓÚ][a-zñáéíóú]{2,10}\s?){2,5}$`