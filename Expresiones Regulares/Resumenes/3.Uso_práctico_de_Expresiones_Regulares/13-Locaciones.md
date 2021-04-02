# Sesión 13 - Locaciones

* Un aplicación común en la que se utiliza expresiones regulares son las locaciones. Para este caso, los datos de ejemplo serán de posicionamiento (latitud y longitud).

* **Caso 1**

```
-99.205646,19.429707,2275.10
-99.205581, 19.429652,2275.10
-99.204654,19.428952,2275.58
```

* Expresión Regular &rarr; `^(\-?\d{1,3}\.\d{1,6}\,\s?){2,2}.*$`

* **Caso 2**

```
-99 12' 34.08"W, 19 34' 56.98"N
-34 54' 32.00"E, -3 21' 67.00"S
```

* Expresión Regular &rarr; `^(\-?\d{1,3}\s\d{2,2}\'\s\d{1,3}\.\d{2,2}\"[W,E,N,S]\,?\s?){2,2}$`

* **Caso 3**

* Encontrar coordenadas del siguiente enlace: https://map.what3words.com/

```
gravel.notes.handbag
reaming.embeds.rats
```

* Expresión Regular &rarr; `^([a-z]+?\.){2}[a-z]+$`