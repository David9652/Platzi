# Sesión 7 - Los delimitadores: +, *, ?

* Es una secuencia de uno o más caracteres utilizados para especificar el límite entre regiones independientes e independientes en texto sin formato u otras secuencias de datos. Es importate resaltar que los delimitadores aplican al caracter o sentencia que preceden.

## Tipos de Delimitadores

* **(*)** &rarr; Cero o más veces. `\d*[a-zA-Z]`  

* **(?)** &rarr; Cero o una sola vez. `\d*[a-zA-Z][a-zA-Z]?`

* **(+)** &rarr; Una o más veces. `\d+[a-zA-Z]$`

* **` \d*[a-z]?s\d+`** &rarr; Lo primero que evalúa esta expresión es que existan cero o más dígitos, luego busca si existe una letra de la **a-z** o no, después necesita encontrar una **s** y finaliza buscando uno o más  dígitos.

** NOTA ** &rarr; Ver el flujo lógico de las expresiones regulares https://www.debuggex.com/