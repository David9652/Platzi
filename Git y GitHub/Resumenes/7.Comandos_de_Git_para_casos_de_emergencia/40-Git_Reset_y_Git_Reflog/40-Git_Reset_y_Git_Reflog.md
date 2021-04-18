# Sesión 40 - Git Reset y Git Reflog

## Git Reflog

* Los registros de referencia también llamados **reflogs** son una funcionalidad de git que registra todos los eventos del repositorio. Cada vez que el extremo de tu rama se actualiza por cualquier motivo, se añade una nueva entrada a este registro.

``` bash
# Mostrar el registro
git reflog

# Mostrar el registro relativo a la fecha especificada
git reflog --relative-date
```

## Git Reset

* Este comando borra toda la información de nuestra rama hasta el punto que le especifiquemos. La invocación predeterminada tiene argumentos implícitos.

``` bash
# Invocación predeterminada del comando
git reset

# Invocación con sus argumentos implícitos
# En vez de HEAD, se puede usar cualquier HASH de commit de git
# Se actualizan los punteros del repositorio y todos los cambios que se hayan deshecho en el índice se mueven al directorio de trabajo
git reset --mixed HEAD

# Todo lo que estaba en el staged se conserva, únicamente actualiza la cabecera del repositorio al commit indicado
git reset --soft hash_commit

# Todo el trabajo que se encuentra en el staged se pierde y la cabecera de nuestro repositorio apuntará al commit indicado, olvidándose de todo lo que sucedió después de ese commit.
git reset --hard hash_commit
```
