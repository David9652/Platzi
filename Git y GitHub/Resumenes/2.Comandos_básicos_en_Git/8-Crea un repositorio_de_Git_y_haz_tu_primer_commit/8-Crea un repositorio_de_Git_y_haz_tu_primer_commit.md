# Sesión 8 - Crea un repositorio de Git y haz tu primer commit

* Para ver los archivos ocultos desde la terminal, se utiliza el comando `$ls -a`.

* Le indicaremos a Git que queremos crear un nuevo repositorio para utilizar su sistema de control de versiones. Solo debemos posicionarnos en la carpeta raíz de nuestro proyecto y ejecutar el comando `$git init`.

* Al ejecutar el comando `$git init` (y de aquí en adelante) se creará una nueva carpeta oculta llamada **.git** con toda la base de datos con cambios atómicos en nuestro proyecto.

* **Git** está optimizado para trabajar en equipo, por lo tanto, es necesario darle un poco de información sobre nosotros. No se debe hacer todas las veces que se ejecuta un comando, basta con ejecutar solo una sola vez los siguientes comandos con la siguiente información:

  * `$git config --global user.email "tu@email.com"`

  * `$git config --global user.name "Tu Nombre"`

* Existen muchas otras configuraciones de **Git** que se pueden encontrar ejecutando el comando `$git config --list`. Además, si se quiere encontrar la ubicación exacta del archivo que lo configura, se debe ejecutar `$git config --list --show-origin`.
