# Sesión 24 - Metadatos, cabeceras y extensiones de archivos

* Históricamente Windows tenía muy pocos bytes para la extensión, por esto la extensión normalmente era de 3 dígitos, y 8 para el nombre.

* Existen muchas otras extensiones como .html para páginas web, .mpg4 para video, etc.

* Cuando abres los archivos vas a ver su codificación binaria o dependiendo del editor puedes verlo en hexadecimal.

* Cada sistema operativo tiene una base de datos de extensiones para saber qué programa abre qué tipo de archivo. Es decir, en la base de datos dirá algo como: jpg = imagen, mp3 = música, html = página web y así. El SO lee los primeros bits de cada archivo hasta que encuentra cierto patrón, esos bits de identificación se llaman la cabecera. Una vez identificado el patrón, el SO ya conoce qué tipo de archivo es, con qué programa se debe abrir y cómo se debe mostrar gracias a la base de datos.

* La Cabecera es la información suplementaria situada al principio de un bloque de información que va a ser almacenada o transmitida y que contiene información necesaria para el correcto tratamiento del bloque de información.

* Cuando estás transmitiendo un archivo por internet se especifica el tipo de archivo con MIME Types, el cual se transmite en la cabecera de un paquete HTTP. La forma en que funciona es sencilla, en la cabecera del protocolo de comunicación (independiente de si es http, ftp, etc), se envían metadatos con la información del archivo. De tal forma que si es una página web, envía text/html, si es un video mp4 envía video/mp4 y así se logra la identificación de los archivos.

* Los metadatos son datos altamente estructurados que describen información, el contenido, la calidad, la condición y otras características de los datos. Es información sobre información o datos sobre los datos.

* Algunos sistemas de archivos limitan la longitud de la extensión, como es el caso de los archivos FAT, mientras que los archivos tipo NTFS permiten más de tres caracteres en la extensión.