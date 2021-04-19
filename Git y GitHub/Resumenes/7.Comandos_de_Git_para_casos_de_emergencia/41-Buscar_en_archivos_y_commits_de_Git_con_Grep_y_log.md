# Sesión 41 - Buscar en archivos y commits de Git con Grep y log

* A medida que nuestro proyecto se hace grande vamos a querer buscar ciertas cosas. Para buscar utilizamos el comando `$git grep word_to_search` y nos buscará en todo el proyecto los archivos en donde está la palabra a buscar.

``` bash
# Muestra en qué línea y archivo está lo que estamos buscando
git grep -n word_to_search

# Cuántas veces se repite la palabra y en qué archivo se encuentra
git grep -c word_to_search

#Buscará en nuestros commits la palabra indicada entre comillas
git log -S “word_to_search”
```
