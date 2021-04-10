# Sesión 14 - Flujo de trabajo básico con un repositorio remoto

* Por ahora, nuestro proyecto vive únicamente en nuestra computadora. Esto significa que no hay forma de que otros miembros del equipo trabajen en él. Para solucionar esto están los **servidores remotos**: un nuevo estado que deben seguir nuestros archivos para conectarse y trabajar con equipos de cualquier parte del mundo.

* Estos servidores remotos pueden estar alojados en **GitHub**, **GitLab**, **BitBucket**, entre otros. Lo que van a hacer es guardar el mismo repositorio que tienes en tu computadora y darnos una URL con la que todos podremos acceder a los archivos del proyecto para descargarlos, hacer cambios y volverlos a enviar al servidor remoto para que otras personas vean los cambios, comparen sus versiones y creen nuevas propuestas para el proyecto.

* Esto significa que debes aprender algunos nuevos comandos:

  * `$git clone [url_del_servidor_remoto]` &rarr; Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta .git.

  * `$git push` &rarr; Luego de hacer `$git add` y `$git commit` debemos ejecutar este comando para mandar los cambios al servidor remoto.
  
  * `$git fetch` &rarr; Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local (en caso de que hayan, por supuesto).

  * `$git merge` &rarr; También usamos el comando `$git merge`  con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.

  * `$git pull` &rarr; : Básicamente, `$git fetch` y `$git merge` al mismo tiempo.

* [Tutorial Git](https://www.atlassian.com/es/git/tutorials "Tutorial Git")
