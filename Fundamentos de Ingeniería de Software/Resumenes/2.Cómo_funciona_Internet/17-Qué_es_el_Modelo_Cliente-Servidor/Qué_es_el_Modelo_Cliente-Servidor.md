# Sesión 17 - ¿Qué es el Modelo Cliente-Servidor?

* Las tecnologías utilizadas en aplicaciones web son:

	- **Bases de datos** &rarr; MySQL es una base de datos relacional y MondoDB es una base de datos no relacional.

	 - **Bases de Datos Relacionales** &rarr; Es el modelo más utilizado actualmente. Los datos se almacenan y se accede a ellos por medio de relaciones que ya están previamente establecidas.

	 - **Bases de Datos No Relacionales** &rarr; Los datos almacenados no requieren estructuras fijas.

	- **Backend** &rarr; Existen muchos lenguajes que puedes usar cómo Python, Ruby, Java, etc.

	- **Servidores** &rarr; Existen tecnologías como NGINX, Apache, Node, etc.

	- **Frontend** &rarr; Son las tecnologías que corren en el navegador, HTML, CSS y JavaScript.

* A un grupo de tecnologías se les conoce como Stack. 

* **Recuerda**:

	- Si tuvieras un código en el Frontend que se conectara a una base de datos, esta seria visible para todos.

	- Cliente (Navegador que lee HTML, CSS y JS).

	- Se envía una solicitud al Backend (Python, Go, Node, Java, etc.) a través de una URI.

	- El Backend recibe la solicitud y toma decisiones en base a ella.

	- El Backend consulta la Base de Datos (MySQL, Oracle, MongoDB, etc) en caso de ser necesario.

	- El Backend devuelve una respuesta que el navegador pueda leer, muchas veces datos en formato JSON.

	- El Cliente recibe los datos JSON y los parsea para mostrarlos en HTML.

## Formas de Envío de Datos

1. **GET** &rarr; Envío de variables por URL (jamás con contraseñas).

2. **POST** &rarr; Envío de variables que están ocultas al usuario (headers).

3. **AJAX** &rarr; Cambio que se actualiza automáticamente sin tener que volver a recargar la página.

4. **Web Sockets** &rarr; Envía datos Cliente-Servidor en tiempo real.