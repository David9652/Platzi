# Sesión 15 - Introducción a las ramas o branches de Git

* Las **ramas** son la forma de hacer cambios en nuestro proyecto sin afectar el flujo de trabajo de la rama principal. Esto porque queremos trabajar una parte muy específica de la aplicación o simplemente experimentar.

* La **cabecera** o **HEAD** representan la **rama** y el **commit** de esa rama donde estamos trabajando. Por defecto, esta cabecera aparecerá en el último commit de nuestra rama principal. Pero podemos cambiarlo al crear una rama (`$git branch [my_branch]`, `$git checkout -b [my_branch]`) o movernos en el tiempo a cualquier otro commit de cualquier otra rama con los comandos (`$git reset [commit_ID]`. `$git checkout [my_branch_or_commit_ID`).
