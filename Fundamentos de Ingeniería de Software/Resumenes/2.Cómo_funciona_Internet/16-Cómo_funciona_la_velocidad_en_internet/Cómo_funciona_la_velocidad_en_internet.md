# Sesión 16 - ¿Cómo funciona la velocidad en internet?

* La mayoría de los ISPs (Internet Service Providers) nos venden ancho de banda en Mb y debemos tener claro qué significa, ya que existe una importante diferencia entre Megabits y MegaBytes.

* Otro aspecto importante en el funcionamiento del internet es la velocidad. A menudo confundimos la velocidad con el ancho de banda, por eso debemos tener claro que la velocidad del internet se mide obteniendo el tiempo que le toma a la información viajar a través de un punto a otro en milisegundos, a esto se le conoce como ping o latencia.

* En la calidad de conexión a internet intervienen dos factores: velocidad y ancho de banda.

	 - **Ancho de Banda** &rarr; Es lo que nos venden los proveedores (Mbps = Mega bits por segundo).

	 - **Velocidad** &rarr; La velocidad de nuestro internet se mide en la cantidad de bits, no bytes que transmite por segundo. Depende del lugar en el que se haga la petición y factores externos, la velocidad puede verse afectada.

* El ping indica la cantidad de segundos que le tomó al computador establecer la conexión. Es lo que tarda 1bit (no un byte) en encontrar el servidor. La forma de medir la velocidad de un ping es divididiendo la distancia, entre un punto de conexión y otro entre la velocidad de la luz 300 km/ms.

	- **Distancia entre Mountain View y Madrid** &rarr; 9344 km

	- **Ping** = $$ s= \frac{d}{v} = \frac{9344 km}{300 km/ms} = 31.14 ms $$

* Una herramienta interesante además del ping para este tipo de análisis, es el traceroute (Linux) / tracert (Windows) que permite verificar el camino (llamados saltos o hops) por el que pasa un paquete de red para llegar desde un origen (ej: casa) hasta un destino (ej: gmail).