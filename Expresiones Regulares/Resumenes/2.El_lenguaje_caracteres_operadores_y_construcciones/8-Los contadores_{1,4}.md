# Sesión 8 - Los contadores {1,4}

* Los contadores son utilizados para comenzar a generalizar nuestras búsquedas, a ser más específicos cubriendo grandes cantidades de caracteres sin tener que escribir de forma repetitiva una expresión.

	* **\d{0,2}** &rarr; Esto buscará 0, 1, 2 dígitos.

	* **\d{2,2}** &rarr; Esto buscará 2 dígitos.

	* **\d{2}** &rarr; Esto buscará 2 dígitos.

	* **\d{2,}** &rarr; Esto buscará 2 o más dígitos.

	* **\d{2,4}** &rarr; Esto buscará 2, 3, 4 dígitos.

* En principio, se quería hacer match solamente con números de 10 dígitos ya que en México los manejan así. Debido a lo anterior, la expresión sería de la siguiente manera:

- **Caso 1**

	**5556581111**
	**56-58-11-12-34**
	**56.58.11.12.33**

`(\d{2,2}[\-\.]?){5,5}$`

- **Caso 2**

	**302-345-9876**
	**143-457-90-77**
	**096-907-11.12**

`(\d{3,3}[\-\.]?){2,2}(\d{2,2}[\-\.]?){2,2}$`

* En caso de que quieras tener una expresión que haga match tanto con el primer caso como con el segundo. Necesitas unir la expresión regular utilizando el operador lógico "o" ( | ).

- **Caso 3**

	**5556581111**
	**56-58-11-12-34**
	**56.58.11.12.33**
	**302-345-9876**
	**143-457-90-77**
	**096-907-11.12**

`(\d{2,2}[\-\.]?){5,5}$|(\d{3,3}[\-\.]?){2,2}(\d{2,2}[\-\.]?){2,2}$`

* Finalmente, la expresión resumida que hará match con todos los números del caso 3 y que además garantiza que antes del primer dígito no haya nada, es la siguiente:

`^(\d[\.\-]?){10,10}$`