# Sesión 2 - ¿Por qué usar un sistema de control de versiones como Git?

* Un sistema de control de versiones como **Git** nos ayuda a guardar el historial de cambios y crecimiento de los archivos de nuestro proyecto.

* En realidad, los cambios y diferencias entre las versiones de nuestros proyectos pueden tener similitudes, algunas veces los cambios pueden ser solo una palabra o una parte específica de un archivo específico. **Git** está optimizado para guardar todos estos cambios de forma atómica e incremental, o sea, aplicando cambios sobre los últimos cambios, estos sobre los cambios anteriores y así hasta el inicio de nuestro proyecto.

* Los comandos más comunes son:

  * `$ git init` sirve para inicializar nuestro repositorio, o sea, indicarle a Git que queremos usar su sistema de control de versiones en nuestro proyecto.

  * `$ git add [nombre_archivo]` es utilizado para que nuestro repositorio sepa de la existencia de un archivo o sus últimos cambios. Este comando no almacena las actualizaciones de forma definitiva, solo las guarda en algo que conocemos como **Staging Area**.

  * `$ git add .` es otra forma de agregar archivos al **Staging Area**. Sin embargo, solamente agregará todos los archivos que se encuentren en el directorio raíz.

  * `$ git add -A` agregará todos los archivos que se encuentren en el directorio raíz y directorios subsecuentes al **Staging Area**.

  * `$ git commit -m [mensaje_del_commit]` almacena definitivamente todos los cambios que viven en el **Staging Area**.

  * `$ git status` permite ver el estado del repositorio y del **Staging Area**.

  * `$ git show` es utilizado para ver con más detalle objetos en **Git** como blobs, árboles, etiquetas y commits.

  * `$ git log` se usa para ver el histórico de commits de nuestro repositorio o algún archivo en específico.

  * `$ git push` envía los cambios al repositorio remoto.

  * `$ git pull` agrega los cambios del commit más nuevo al repositorio local.

  * [Bases de Git](https://rubygarage.org/blog/most-basic-git-commands-with-examples "Bases de Git")
