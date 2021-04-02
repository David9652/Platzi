# Sesión 5 - El caracter (.)

* Cada espacio en una cadena de texto se llena con un caracter, esto lo necesitamos tener perfectamente claro para comenzar a trabajar con expresiones regulares.

* **Cadena de Caracteres** &rarr; Es un caracter [ASCII](https://elcodigoascii.com.ar/ "ASCII") generalmente, seguido de otro carácter y de otro. No todos son visibles, el espacio por ejemplo. Cada caracter es un caracter.

* **El caracter (.)** &rarr; Encuéntrame todo lo que sea un caracter. No busca saltos de línea.

* **NOTA** &rarr; En Visual Studio Code se pueden ver los caracteres invisibles, en File>Preferences>Settings: "editor.renderWhitespace": "all".

* **Ejemplo 1**

	* `.(space)` &rarr;  Encontrar cualquier caracter que después tenga un espacio.

	```
1
12
123
1234
12345
12345678910
12345678910a
13453243
url: https://www.instagram.com/p/BXB4zsUlW5Z/?taken-by=beco.mx
url: http://instagram.com/p/blablablah
url: http://itam.mx/test
http://instagram.com/p/blablablah
csv1,csv2,csv3,csv4,csv5
Rodrigo Jiménez Gutiérrez
5556581111
56-58-11-12
302-345-9876
esto.es.un.mail+gmail@mail.com
dominio.com
[LOG ENTRY] [ERROR] The system is unstable
[LOG ENTRY] [WARN] The system may be down
[LOG ENTRY] [LOG] Everything is OK
[LOG ENTRY] [LOG] [user:@beco] Logged in
[LOG ENTRY] [LOG] [user:@beco] Clicked here
[LOG ENTRY] [LOG] [user:@beco] Rated the app
[LOG ENTRY] [LOG] [user:@beco] Logged out
```