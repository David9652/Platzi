# Sesión 11 - Puertos y Protocolos de Red

* Más que estándar, es una convención para separar las IPs en públicas o privadas. Las IP privadas que están comunmente restringidas para el uso exclusivo de IP privadas son:

	- 0.0.0.0 - 10.255.255.255
	- 127.0.0.0 -127.255.255.255 (LoopBack)
	- 172.16.0.0 - 172.31.255.255
	- 192.168.0.0 - 192.168.255.255

* Cualquier Ip que este fuera de estos cuatro rangos, se le considera una IP pública.

* Las direcciones  Ip están clasificadas como clase A, clase B, clase C, D y E. Esta clasificación es más que todo para las IPv4.

* Un puerto de red es una interfaz para comunicarse con un programa específico. La IP identifica nuestra computadora pero por medio del puerto accedamos a un programa. Por ejemplo, el puerto 3306 identifica a MySQL, el puerto 22 a SSH y así. A través de la IP:puerto accedemos a programas específicos que viven en nuestra computadora. Suele estar numerado para de esta forma poder identificar la aplicación que lo usa.

	 - **Puertos 1 - 1024** &rarr; Puertos reservados para el sistema (Protocolo HTTP - Puerto 80, Protocolo HTTPS - Puerto 443).

	 **Puertos 1024 - 49151** &rarr; Son los puertos registrados, los cuales puede usar cualquier aplicación (Bittorrent - Puertos del 6881 al 6889).

	  **Puertos 49151 - 65535** &rarr; Son llamados dinámicos o privados y son aquellos que se asignan dinámicamente a alguna aplicación del cliente, cuando inicia una conexión (Servicios P2P (peer to peer)).