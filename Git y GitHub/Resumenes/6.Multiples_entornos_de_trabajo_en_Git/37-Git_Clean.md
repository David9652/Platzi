# Sesión 37 - Git Clean

* A veces creamos archivos cuando estamos realizando nuestro proyecto que realmente no forman parte de nuestro directorio de trabajo, que no se deberían agregar y lo sabemos. Para esp, existe el comando `$git clean`.

``` bash
# Para saber qué archivos vamos a borrar
git clean --dry-run

# Para borrar todos los archivos listados (que no son carpetas)
git clean -f

# Para borrar todos los archivos y carpetas listadas
git clean -fd

# Para borrar todos los archivos, incluyendo los que están dentro de un .gitignore
git clean -fx
```
