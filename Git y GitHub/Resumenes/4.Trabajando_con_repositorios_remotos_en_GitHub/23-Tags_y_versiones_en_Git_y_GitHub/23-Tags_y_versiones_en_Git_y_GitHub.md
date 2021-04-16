# Sesión 23 - Tags y versiones en Git y GitHub

* Los **tags** o **etiquetas** nos permiten asignar versiones a los commits con cambios más importantes o significativos de nuestro proyecto.

* Los comandos más utilizados para trabajar con etiquetas son:

  * Crear un nuevo tag, asignarlo a un commit y agregarle un comentario  &rarr; `$git tag -m "comentario_del_release" nombre-del-tag hash-del-commit`
  * Borrar un tag en el repositorio local &rarr; `$git tag -d nombre-del-tag`
  * Listar los tags de nuestro repositorio local &rarr; `$git tag` o `$git show-ref --tags`
  * Publicar un tag en el repositorio remoto &rarr; `$git push origin --tags`
  * Borrar un tag del repositorio remoto &rarr; `$git tag -d nombre-del-tag` y `$git push origin :refs/tags/nombre-del-tag`

* Para crear un alias global en git llamado **superlog**, se debe utilizar el siguiente comando: `$git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(red)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"`
