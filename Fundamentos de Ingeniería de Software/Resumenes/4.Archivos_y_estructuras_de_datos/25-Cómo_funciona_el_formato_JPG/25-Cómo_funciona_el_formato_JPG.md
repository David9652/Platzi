# Sesión 25 - ¿Cómo funciona el formato JPG?

* Si asumimos que tenemos una foto de 600*800px en un formato sin compresión, esta pesaría 480KB, representando un byte por pixel.

* En caso de que quiera representar más colores, es decir, 4 bytes por pixel, la imagen pesaría 1.9MB. Debido a que es demasiado peso, podemos comprimir las imágenes y usar formatos como jpeg.

* jpg lo que hace es aproximar áreas de color, si un color esta en áreas continuas, solo se declara la zona y el color de esa zona, de esta forma se pueden tener imágenes que pesan mucho menos.

* El formato PNG funciona diferente a JPG. Y hay mejoras sobre el algoritmo JPG como JPEG2000.

* Hay todo un mundo de formatos y estándares de compresión como:

	* **DivX** &rarr; Video
	* **gzip** &rarr; Prótocolo HTTP
	* **AAC Vs MP3** &rarr; Sonido
	* **MKV** &rarr; Metaformato contenedor de otros formatos
	* **PSD** &rarr; Formato cerrado gráfico

* JPEG es un algoritmo que lo que hace es identificar coordenadas o áreas que tengan zonas de color similares. De esta manera minimiza la utilización de bytes y logra que la imagen tenga un peso mucho menor.

* TinyPNG utiliza una técnica llamada quantisation, funciona combinando colores similares, y como el número de colores es reducido, las imágenes de 24 bits se convierten en imágenes de 8 bits. Más informació https://pngquant.org/.