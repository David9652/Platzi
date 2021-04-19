# Sesión 15 - ¿Cómo los ISP hacen Quality of Service o QoS?

* Cuando queremos conectarnos a puntos muy lejanos, por ejemplo el otro lado del mundo, para nuestro proveedor de internet es muy costoso, por lo tanto prioriza las conexiones usando un QoS (Quality of Service).  Los proveedores establecen prioridades sobre la red, entonces reducen la conexión, enfocándose en los clientes que dan más dinero y los servicios más solicitados como email, archivos, llamadas, etc. Debido a esto, configuran los routers internos a través de una tecnología llamada Firewalls y otras como Network Shaping.

* **Quality of Service (QoS)** &rarr; Consiste en que funcionen óptimamente ciertos servicios y otros no, también se le conoce como Network Shaping (Forma de la red u organización de la red) o Throttling (estrangulamiento).

* Hay un forma de burlar el QoS y simular una conexión más cercana a través del CDN (Content Delivery Network), los cuales tienen la función de mostrar solamente contenido estático como imágenes, videos, etc.

* **Throttling** &rarr; Consiste en acelerar y desacelerar la conexión en ciertos puntos. Debido a este Throttling, empresas como Google, Facebook, Twitter, incluso Platzi, se inventaron una forma de hacer que el Throtling no sea tan malo. Cómo el tráfico en el país es más barato que el internacional,  crearon un concepto llamado CDN (Content Delivery Network) o Red de entrega de contenidos, la cual garantiza una conexión más corta y así puede saltarse todos estos problemas.

* **CDN (Content Delivery Network)** &rarr; Son servidores que replican por todo el planeta los archivos estáticos de las páginas web como lo son videos, imágenes, fotos, etc. Debido a lo anterior, cada CDN está conectado al IXP más cercano, hasta el punto que lo ubican en el mismo data center del IXP, de manera que al recibir las peticiones regresan la IP del servidor CDN más cercano. Por ejemplo, en el caso de Twitter no hay un solo servidor, sino que hay muchos que están replicando constantemente la información usando CDN, y son estos los que realmente dan acceso a esta información.

* La velocidad es muy importante en internet, y es muy costosa. Los ISP les tienen que pagar a los IXP. Este pago se hace en la última milla (conexión entre los distribuidores de ISP y el cableado de las casas u empresas).

* Cuando la transmisión se hace entre personas de un diferente ISP, tienen que ir al IXP y se hace más costosa por la inversión en cableado submarino y demás. Debido a lo anterior, surgió el principio MAN (Metropolitan Area Network), el cual suministra la información entre clientes de un sitio común (vecinos) pasando la información entre el ISP y los modem de los ISP ubicados en cada sitio sin necesidad de pasar por los IXP; el costo de eso es casi nulo.