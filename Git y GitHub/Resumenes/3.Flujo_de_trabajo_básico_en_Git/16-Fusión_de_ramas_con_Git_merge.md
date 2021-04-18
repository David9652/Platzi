# Sesión 16 - Fusión de ramas con Git merge

* El comando `$git merge` nos permite crear un nuevo commit con la combinación de dos ramas (la rama donde nos encontramos cuando ejecutamos el comando y la rama que indiquemos después del comando).

```git
# Crear un nuevo commit en la rama master combinando los cambios de la rama development:
git checkout master
git merge development

# Crear un nuevo commit en la rama development combinando los cambios de cualquier otra rama:
git checkout development
git merge another_branch
```
