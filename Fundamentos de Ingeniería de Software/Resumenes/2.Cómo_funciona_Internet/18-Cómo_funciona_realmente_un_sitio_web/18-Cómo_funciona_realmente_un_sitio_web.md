# Sesión 18 - ¿Cómo funciona realmente un sitio web?

1. El navegador le hace una petición al sistema operativo para ver si tiene en caché el DNS pedido (Si entramos a los mismos sitios webs muchas veces, no tiene sentido estar yendo todo el tiempo a los servidores DNS).

2.  Los protocolos se encargan de manejar todas las peticiones que hacen la páginas de internet desde tu navegador hacia los servidores DNS, éstos transforman la dirección de la página web en una dirección IP y tu navegador se conecta a esa IP.

3. Una vez se tiene la dirección IP, el navegador envía un HTTP request en donde envía información con las características del cliente y los requerimientos del mismo, es decir, Host requerido, página del sitio que necesita, tipo de navegador, versión del navegador, etc.

4. El servidor envía los resultados por medio del mismo protocolo HTTP en forma de un HTTP Response en donde manda todo el HTML del sitio web así como otros datos que el navegador necesita.

5. Por último, se cargan los assets de nuestro sitio web y es aquí donde se descargan imágenes, sonidos, etc.

* En los estados de las conexiones, generalmente los mayores a 500 son errores en el servidor, los de 400 son problemas en la peticiones, los de 300 indican redirecciones y los códigos 200 significan un response correcto.