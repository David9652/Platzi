# Sesión 36 - Git Stash

* Es un estado que nos ayuda a guardar los cambios en **Staging** y **Unstaged** para poder cambiar sin perder el trabajo que todavía no guardamos en un commit. Nos permite cambiar de ramas, hacer cambios, trabajar en otras cosas y, más adelante, retomar el trabajo con los archivos que teníamos en **Staging** y **Unstaged** pero que podemos recuperar ya que los guardamos en el **Stash**.

``` bash
# Guardar los cambios del Staging en Stash
git stash

# Retomar los últimos cambios guardados en Stash, recuerda que pueden generar conflictos que se resuelven igual que los conflictos de git merge
git stash pop

# Ver la lista de cambios guardados en Stash
git stash list

# Retomar los cambios de una posición específica del Stash
git stash apply stash@{x}

# Borrar una posición específica del Stash:
git stash drop stash@{x}

# Aplicar los cambios del Stash a una rama:
git stash branch nombre_de_la_rama
```
