# Sesión 17 - Mails

* Quedamos en que ya podemos definir URLs, y dentro de las URLs están los dominios. No es infalible, pero es muy útil para detectar la gran mayoría de errores que cometen los usuarios al escribir sus emails.

* De acuerdo a las siguientes líneas:

	* esto.es.un.mail+gm_ail@mail.com
	* esto.es_un.mail@mail.com
	* dominio.com
	* rodrigo.jimenez@yahoo.com.mx
	* ruben@starbucks.com
	* esto_no$es_email@dominio.com
	* no_se_de_internet3@hotmail.com

* Definir un patrón que haga match con una dirección email de yahoo, gmail, entre otras.

**Solución**

* El primer paso fue identificar la expresión regular que hará match con el usuario del correo electrónico.

	* `[\w\.\+]{5,30}`

* El segundo paso fue determinar una expresión que hiciera match con un posible alias (gmail permite esto agregando un + después del nombre del usuario).

	* `(\+\w{0,10})?`

* El tercer paso fue hacer una expresión regular que identificara el dominio del correo.`

	* `\@[\w\-\.]+\.\w{2,5}`

* Finalmente, se unieron todas las expresiones regulares en una sola, añadiendo los caracteres que identificar el inicio y final de una línea.

	* `^[\w\.\+]{5,30}(\+\w{0,10})?\@[\w\-\.]+\.\w{2,5}$`

* Expresiones Regulares Emails &rarr; http://emailregex.com/