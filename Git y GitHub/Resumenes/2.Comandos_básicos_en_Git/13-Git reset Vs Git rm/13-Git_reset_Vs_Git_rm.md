# Sesión 13 - Git reset Vs Git rm

* git reset y git rm son comandos con utilidades muy diferentes, pero aún así se confunden muy fácilmente.

## git rm

* Este comando nos ayuda a eliminar archivos de **Git** sin eliminar su historial del sistema de versiones. Esto quiere decir que si necesitamos recuperar el archivo solo debemos “viajar en el tiempo” y recuperar el último commit antes de borrar el archivo en cuestión.

* Recuerda que `$git rm` no puede usarse así no más. Debemos usar uno de los flags para indicarle a **Git** cómo eliminar los archivos que ya no necesitamos en la última versión del proyecto:

  * git rm --cached &rarr; Elimina los archivos del área de **Staging** y del próximo commit pero los mantiene en nuestro disco duro.

  * git rm --force &rarr; Elimina los archivos de **Git** y del disco duro. **Git** siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

## git reset

* Este comando nos ayuda a volver en el tiempo. Pero no como `$git checkout` que nos deja ir, mirar, pasear y volver. Con `$git reset` volvemos al pasado sin la posibilidad de volver al futuro. Borramos la historia y la debemos sobreescribir. No hay vuelta atrás.

* Este comando es muy peligroso y debemos usarlo solo en caso de emergencia. Recuerda que debemos usar alguna de estas dos opciones:

  * git reset --soft &rarr; Borramos todo el historial y los registros de Git pero guardamos los cambios que tengamos en Staging, así podemos aplicar las últimas actualizaciones a un nuevo commit.

  * git reset --hard &rarr; Borra todo. Todo todito, absolutamente todo. Toda la información de los commits y del área de staging se borra del historial.

* `$git reset HEAD` es el comando para sacar archivos del área de **Staging**. No para borrarlos ni nada de eso, solo para que los últimos cambios de estos archivos no se envíen al último commit, a menos que cambiemos de opinión y los incluyamos de nuevo en staging con git add, por supuesto.

* [Git cheatsheet](https://vishnu.hashnode.dev/git-cheatsheet-ckmyo18y00020qws1c9pi2mf0 "Git cheatsheet")
