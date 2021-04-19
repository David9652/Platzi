# Sesión 27 - ¿Cómo funciona .zip: Árboles binarios?

* Los árboles binarios nos permiten comprimir sin perder información, en este caso vamos a comprimir **amo leer panama papers**.

* Debemos ver cuántas veces se repite cada letra:

	`a = 5, m = 2, r = 2, s = 1, o = 1, space = 3, p = 3, l = 1, e = 3`

	`n = 1`

* La letra con más frecuencia va a estar en el primer punto de la rama, cuando se encuentra es 1 y si no se encuentra es cero-

* Con esto debemos volver a construir nuestro mensaje, siguiendo el árbol quedaría:

	`1 0001 0000001 01 00000001 001 001 000001 01 0001 1 0000000001`

	`1 00001 1 01 0001 1 0001 001 000001 000000001`

* Aunque en este ejemplo no se reduce drásticamente el tamaño, imagina parrafos más grandes u otro tipo de archivos.