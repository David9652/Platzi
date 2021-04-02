# Sesión 20 - Uso de REGEX para descomponer querys GET

* Al hacer consultas a sitios web mediante el método GET se envían todas las variables al servidor a través de la misma URL.

*  La parte de la url que viene luego del signo de interrogación ? se le llama query del request que es: variable1=valor1&variable2=valor2&... y así tantas veces como se necesite. En esta clase veremos como extraer estas variables usando expresiones regulares.

* De acuerdo a las siguientes líneas:

	* https://www.instagram.com/p/BXB4zsUlW5Z/?taken=beco.mx 
	* https://www.instagram.com/p/?codigo=123&tipo=administrador&modulo=blog

* Definir un patrón que descomponga el query del request según sus parámetros.

**Solución**

* El primer paso fue identificar el parámetro con su respectiva sepación.

	* `[\?&](\w+)`

* El segundo paso fue determinar su valor.

	* `=([^&]+)`

* Después, se unieron todas las expresiones regulares en una sola.

	* `[\?&](\w+)=([^&]+)`

* Finalmente, se procedió a extraer la información relevante utilizando `\n $1=$2`