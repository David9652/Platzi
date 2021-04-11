# Sesión 17 - Resolución de conflictos al hacer un merge

* **Git** nunca borra nada a menos de que nosotros se lo indiquemos. Cuando usamos los comandos `$git merge` o `$git checkout` estamos cambiando de rama o creando un nuevo commit, no borrando ramas ni commits (recuerda que puedes borrar commits con `$git reset` y ramas con `$git branch -d`).

* **Git** es muy inteligente y puede resolver algunos conflictos automáticamente: cambios, nuevas líneas, entre otros. Sin embargo, algunas veces no sabe cómo resolver estas diferencias, por ejemplo, cuando dos ramas diferentes hacen cambios distintos a una misma línea. Esto lo conocemos como **conflicto** y lo podemos resolver manualmente, solo debemos hacer el merge, ir a nuestro editor de código y elegir si queremos quedarnos con alguna de estas dos versiones o algo diferente.

* Recuerda que siempre debemos crear un nuevo commit para aplicar los cambios del merge. Si **Git** puede resolver el conflicto hará commit automáticamente. Pero, en caso de que no pueda resolverlo, debemos solucionarlo y hacer el commit.

* Los archivos con conflictos por el comando `$git merge` entran en un nuevo estado que conocemos como **Unmerged**. Funcionan muy parecido a los archivos en estado **Unstaged**, algo así como un estado intermedio entre **Untracked** y **Unstaged**, solo debemos ejecutar `$git add` para pasarlos al área de staging y `$git commit` para aplicar los cambios en el repositorio.
