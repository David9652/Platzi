# Sesión 7 - GPUs tarjetas de video y sonido

* Para poder ver en pantalla un archivo que se ha abierto, se necesita la Graphic Processing Unit o GPU.

* La CPU puede ejecutar cualquier proceso, incluido el dibujado en pantalla de ciertos datos. Pero no es ella quien se encarga, sino la GPU; tarjetas especialmente fabricadas para realizar estas tareas.

* CPU &rarr; Procesamiento secuencial.
* GPU &rarr; Procesamiento paralelo.

* La comunicación entre la CPU y la GPU se realiza actualmente a través de un socket llamado PCI-Express.

* Estas placas de vídeo tienen sus propias unidades o núcleos de procesamiento y su propia memoria RAM.

* Lo que sucede es que la GPU divide la pantalla en una matriz y cada núcleo se encarga de dibujar una parte de esa matriz, para lograr un mejor performance.

* Esto es mucho más rápido de lo que podría lograr la CPU sola ya que debería dibujar pixel por pixel ella sola.

## ¿Cómo funciona el chip de la GPU?

1. La GPU convierte la pantalla en una grilla separando con pixeles.

2. Asigna zonas de la pantallas a los núcleos que la procesarán

3. Esta habla con el software en cuestion a través de los bridges que tiene con el sistema operativo.

4. El software le dice como representar los datos en pantalla.


* Si mi GPU tiene poca capacidad, reducir la informacion grafica que tiene que procesar, es decir, menos resolucion de pantalla, menos animaciones y cambios de pantalla

* Comprar una GPU en función a mis necesidades gráficas. Preferir una GPU que lleve dentro instrucciones sobre modelado 3D y todo.