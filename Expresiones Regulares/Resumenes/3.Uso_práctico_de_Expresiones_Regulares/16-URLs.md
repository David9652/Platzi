# Sesión 16 - URLs

* Una de las cosas que más vamos a usar en la vida, seamos frontend o backend, serán directamente dominios o direcciones de internet; ya sea direcciones completas de archivo (una url) o puntualmente dominios para ver si es correcto un mail o no.

* De acuerdo a las siguientes líneas:

	* 12345678910a
	* 13453243
	* url: https://www.instagram.com/p/BXB4zsUlW5Z/?taken-by=beco.mx 
	* url: http://ins3tagram.com/p/blablablah
	* url: http://itam.mx/test
	* http://instagram.com/p/blablablah
	* https://google.com
	* https://cdn-microsoft.com/image/seui_5959.jpg
	* https://sub.dom.inio.com/archivo.html
	* csv1,csv2,csv3,csv4,csv5
	* Rodrigo Jiménez Gutiérrez
	* #FF0000
	* 555658

* Definir un patrón que haga match con una dirección url.

**Solución**

* El primer paso fue identificar el protocolo de transmisión (HTTPS o HTTP).

	* `https?`

* El segundo paso fue determinar una expresión que hiciera match con dominios y subdominios.

	* `:\/\/[\w\-\.]+\.`

* El tercer paso fue hacer una expresión regular que identificara las extensiones TDR (top-level domain) y el complemento de la URL

	*`\w{2,5}\/?\S*

* Finalmente, se unieron todas las expresiones regulares en una sola, añadiendo los caracteres que identificar el inicio y final de una línea.

	* `^https?:\/\/[\w\-\.]+\.\w{2,5}\/?\S*$

* [List of Internet top-level domain (TDL) extensions](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#G_2 "List of Internet top-level domain (TDL) extensions") 