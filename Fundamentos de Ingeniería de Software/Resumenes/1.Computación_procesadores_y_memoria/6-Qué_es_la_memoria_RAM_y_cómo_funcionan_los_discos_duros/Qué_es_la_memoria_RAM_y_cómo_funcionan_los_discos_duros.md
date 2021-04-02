# Sesión 6 - ¿Qué es la memoria RAM y cómo funcionan los discos duros?

* Sabemos que los archivos se almacenan en el disco duro y a la hora de abrirlo, se cargan en memoria RAM.

* Los discos duros antiguos funcionan como los vinilos antiguos, tienen un cabezal que va leyendo los datos que pasan por debajo de ella a medida que el disco gira a una velocidad constante.

* Los discos duros son lentos porque deben posicionarse donde está el archivo almacenado y esto puede implicar que el brazo mecánico que mueve el cabezal se tome mucho tiempo en encontrar todos los pedazos de datos del archivo.

* La memoria RAM es más rápida ya que puede acceder a los datos almacenados de manera instantánea.

* Los discos duros de estado sólido no tienen el cabezal ni los discos que giran, sino que son más parecidos a las memorias RAM, funcionan electrónicamente. A pesar de eso guardan los datos en memorias flash, que son un poco más lentas que las RAM.

* Los discos duros no son volátiles, guardan la información de manera persistente aunque se les quite el suministro de energía. Además, almacenan los archivos de manera secuencial. Para almacenar un archivo, éste se parte en varios pedacitos y se guarda la posición de cada uno de estos pedacitos y su ubicación en el disco para poder leerlos secuencialmente.

* Los sistemas de archivos son convenciones internas de los sistemas operativos para poder acceder a los archivos almacenados.

	- **Linux** &rarr; Existe ext3 o ext4.

	- **Windows** &rarr; Existía FAT16 o FAT32 (File Allocation Table), que fue reemplazado por NTFS (New Technology File System).

	- **Mac OSX** &rarr; El sistema de archivos se llamaba HFS (Hierarchical File System) pero ahora se llama AFS (Apple File System) en macOS Sierra.

* Cuando abrimos un archivo, el CPU se lo pide al disco duro y luego lo lleva a la memoria RAM para leerlo.

* En la RAM están todos los programas y archivos que están en ejecución. Si abrimos un archivo con el Bloc de Notas, por ejemplo, este debe estar cargado en la RAM. Y el CPU puede acceder a la memoria RAM a través de un índice compartido, es decir, un índice que indica en qué posiciones de memoria se encuentran las partes de un archivo o proceso.

* Los datos viajan a través de un conjunto de cables paralelos llamado bus de datos, que comunica el CPU con el disco duro y la RAM para permitir la transferencia de datos.

## Características de un Disco Duro 

1.  **Persistente** &rarr; Sin importar que se les desconecte, almacenan la información.

2. **Secuencial** &rarr; Leen los datos de a poco.

3. **Estructurada** &rarr; Depende del sistema de archivos, que a su vez depende del S.O. que esté en el disco duro.

## Forma de Localizar y Leer Archivos

* En la parte superior de los Discos Duros existe una cabecera, la cual guarda el indice de todos los archivos, esto permite que en el momento de lectura desde la cabecera, se conozca en dónde está ubicado el archivo en cuestión.

## Borrado de archivos

* Por tal motivo, cuando se borra un archivo, lo que realmente se está haciendo es eliminando el indice en la cabecera que está relacionado con el archivo. Determinados tipos de software permiten la recuperación de estos archivos, leyendo detalladamente todo el disco duro. Sin embargo, algunas practicas de borrado (Sheredder) permiten borrar el archivo por completo, incluso ejecutando el borrado determinado número de repeticiones, lo que imposibilita el trabajo de forenses para la recuperación de datos o archivos.

## Memoria RAM (Random Access Memory)

* **Procesos** &rarr; La memoria RAM, siendo tan rápida, tiene la capacidad de ejecutar varios procesos paralelamente. El SO es uno de esos procesos ejecutados por la RAM. Sin embargo, la opciones que nos ofrece el SO son muchas y no siempre se utilizan todas, por lo tanto la RAM solo carga aquellas tareas que realmente necesitamos y estamos usando frecuentemente.

* **Localización de Procesos** &rarr; A diferencia de los discos duros, la memoria RAM hace uso de un indice compartido con la CPU que es ultra veloz. Esto facilita y permite una localización de los procesos por parte de la CPU de una manera increíblemente rápida.

## CPU (Central Process Unit)

* Dentro de este asombroso chip, nos encontramos con un espacio que recibe por nombre Memoria Caché. En ella se guardan y almacenan cierto tipo de datos de uso frecuente, para que sea más fácil y rápido el acceso a ellos. Por ejemplo, una parte del SO siempre estará almacenada en la Memoria Caché para que sea rápido acceder a él.

### Comunicación

* Para lograr la efectiva comunicación entre la CPU y la RAM, existe lo que se conoce como un bus de datos o bridge (puente). Un bus de datos en algunas ocaciones es un cable delgado y ancho. En otros casos, esta conexión está establecida como circuito en la placa madre (Motherboard).

* Para la conexión entre en el disco duro y la CPU, el bus de datos que los conecta recibió inicialmente el nombre ATA, que en una versión posterior se llamó SATA. Hay otro tipo de bus de datos para el disco duro mejor que SATA, que se llamó IDG.