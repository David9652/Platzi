# Sesión 32 - Ignorar archivos en el repositorio con .gitignore

* No todos los archivos que agregas a un proyecto deberían guardarse en un repositorio, ya que hay archivos que no todo el mundo debería ver. Para que no se suban estos archivos no deseados, se puede crear un archivo con el nombre **.gitignore** en la raíz del repositorio teniendo en cuenta estas [reglas](https://github.com/David9652/hyperblog "reglas").

* Las razones principales para tomar la decisión de no agregar un archivo a un repositorio son:
  * Un archivo con contraseñas (normalmente con la extensión **.env**).
  * Un **BLOB** (binary large object, objeto binario grande), ya que son difíciles de gestionar en git.
  * Archivos que se generan corriendo comandos, por ejemplo la carpeta **node_modules** que genera **npm** al correr el comando `$npm install`.

* Dado que es una mala práctica subir archivos binarios como las imágenes, se pueden utilizar ciertos sitios para almacenar este contenido:

  * [Imgur](https://imgur.com/ "Imgur").
  * [S3 Amazon](https://aws.amazon.com/es/s3/ "S3 Amazon").

* [Generador de archivos .gitignore](https://www.gitignore.io/ "Generador de archivos .gitignore").

## Ejemplos .gitignore

* [Laravel](https://github.com/laravel/laravel "Laravel")
* [Ghost](https://github.com/TryGhost/Ghost "Ghost")
* [VueJS](https://github.com/vuejs/vue "VueJS")
* [Arduino](https://github.com/arduino/Arduino "Arduino")
