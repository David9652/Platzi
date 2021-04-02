# Sesión 19 - Búsqueda y reemplazo

* Al igual que una navaja suiza, las expresiones regulares son una herramienta increíblemente útil pero tienes que darle la importancia y las responsabilidades adecuadas a cada una, ya que no son la panacea, no solucionan todos los problemas.

* El uso más conveniente de las expresiones regulares es buscar coincidencias o matches de cadenas en un texto, y si es necesario, reemplazarlas con un texto diferente.

* De acuerdo a las siguientes líneas:

	* 1::Toy Story (1995)::Animation|Childrens|Comedy
	* 2::Jumanji (1995)::Adventure|Childrens|Fantasy
	* 3::Grumpier Old Men (1995)::Comedy|Romance
	* 4::Waiting to Exhale (1995)::Comedy|Drama
	* 5::Father of the Bride Part II (1995)::Comedy
	* 6::Heat (1995)::Action|Crime|Thriller
	* 7::Sabrina (1995)::Comedy|Romance
	* 8::Tom and Huck (1995)::Adventure|Childrens
	* 9::Sudden Death (1995)::Action
	* 10::GoldenEye (1995)::Action|Adventure|Thriller

* Definir un patrón por clases que haga match con el título, año y género de la película.

**Solución**

* El primer paso fue identificar la expresión regular que reconociera el número de la película.

	* `\d+::`

* Después, se definió una clase que reconociera el título de la película.

	* `([\w\s:,\.&#;*?\$!'\-\/\(\)]+)`

* Posteriormente, se realizó una clase que encontrara el año de la película.

	* `\((\d{4})\)`

* El cuarto paso fue hacer una expresión regular que identificara los géneros de las películas.

	* `::(\w+)`

* Finalmente, se unieron todas las expresiones regulares en una sola, añadiendo los caracteres que identificar el inicio y final de una línea.

* `^\d+::([\w\s:,\.&#;*?\$!'\-\/\(\)]+)\((\d{4})\)::(\w+)$`

* Una vez terminada la expresión regular, se procedió a extraer solamente la información relevante que necesitábamos (título, año y género) para almacenarla en una bases de datos relacional o no relacional.

* **SQL** &rarr; `insert into movies (year,title,genrer) values($2,$1,$3);`

* **NoSQL** &rarr; `{year:$2, title:$1,genrer:$3

* **NOTA** &rarr; Para hacer referencia a una clase se debe utilizar el operador **$** y después el número de la clase usada `$1,$2,$3`