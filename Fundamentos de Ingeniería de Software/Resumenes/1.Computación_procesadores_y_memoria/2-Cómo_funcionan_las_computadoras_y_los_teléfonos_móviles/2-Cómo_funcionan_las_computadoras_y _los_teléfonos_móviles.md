# Sesión 2 - ¿Cómo funcionan las computadoras y los teléfonos móviles?

+ Aprende cómo es el proceso de enviar un email, todo su recorrido desde tu computadora, servidores y notificaciones hasta que llega al destinatario.

1. Escribimos el email.

2. Presionamos enter para enviar el email.

	2.1. Al presionar enter estamos enviando una señal eléctrica desde el teclado hacia la motherboard.

	2.2. La motherboard envía esta señal a la CPU.

	2.3. La CPU recibe la señal del teclado y la envía al sistema operativo.

	2.4. El sistema operativo (a través de drivers, que son softwares que interpretan las señales eléctricas de los periféricos) interpreta la señal eléctrica y la envía al navegador (pues sabe que nosotros queríamos enviarlo desde ahí, ya que el computador conoce el estado, es decir, dónde tengo el foco).

	2.5. Nosotros cuando estamos en una pestaña de chrome en realidad estamos en un html. Un html posee uno o varios scripts, y hay un script que está preparado para hacer algo en el momento en que se pulsa enter (momento en el que ocurre el evento **Pulsar tecla enter**).

	2.6. Javascript entiende que al ocurrir el evento **enter** tiene que hacer algo con el email que hemos escrito, así que utiliza una API llamada AJAX.

		AJAX permite enviar datos al servidor (el email en este caso) y que la página no se recargue. AJAX es un API (Interfaz de Programación), que, entre sus múltiples funciones, encapsula los datos que deseamos enviar de una manera que luego el servidor comprenderá. La forma de encapsular los datos se denomina formato JSON. 
		AJAX envía el email en formato JSON a través del protocolo REST (es un conjunto de reglas de cómo se envían los datos a un servidor) utilizando HTTP.
		HTTP y HTTPS son protocolos de transferencia de texto. HTTPS es más seguro porque permite que solo el servidor al cual le estamos enviando los datos pueda verlos en texto plano. Los datos se envían a un servidor DNS para saber qué dirección IP tiene ese dominio.

	2.7. Después, el servidor DNS le envía la petición al servidor objetivo. El servidor objetivo recibe los datos en forma de señales eléctricas, y a través de drivers reinterpreta la señal, la cual es enviada al sistema operativo (en general Linux) y este se encarga de llevarla a una capa de red, conocida como Ethernet. Luego, esta información es enviada a Linux para que este encapsule los datos utilizando el protocolo TCP/IP. Este protocolo envía los datos transformados hacia el protocolo HTTP. Esta información es recibida por un servidor de HTTP en Linux (Nginx o Apache).

	2.8. El servidor HTTP permite que los programas en el backend (Java, Python, PHP) procesen la información recibida según corresponda. Los datos procesados son guardados en una base de datos (MySQL, Oracle, PostgreSQL) para que luego puedan ser accedidos.

	2.9. El email ahora sí es enviado y se dirige al servidor de emails del dominio que se envía utilizando el protocolo de email. Los servidores de emails tienen un servidor de software (Postfix) que interpreta esta información y la envía a la base de datos del email que corresponde (el que está previo al @), es decir va a la bandeja del receptor.

	2.10. Luego, el servidor de notificaciones espera a que el servidor de emails, le diga qué usuario tiene un correo nuevo para que este le haga llegar la notificación a la bandeja del receptor.

3. El email fue enviado y el receptor fue notificado a su celular.

**NOTA: Los DNS son servidores que tienen una base de datos que relaciona un nombre con un IP.**