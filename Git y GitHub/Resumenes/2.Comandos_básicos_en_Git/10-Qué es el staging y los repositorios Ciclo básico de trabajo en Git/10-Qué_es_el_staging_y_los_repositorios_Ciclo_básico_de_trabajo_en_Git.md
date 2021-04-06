# Sesión 10 - Qué es el staging y los repositorios Ciclo básico de trabajo en Git

* Cuando se trabaja con **Git**, los archivos pueden vivir y moverse entre 4 diferentes estados (los repositorios remotos pueden tener más estados):

  **Archivos Untracked** &rarr; son archivos que NO viven dentro de **Git**, solo en el disco duro. Nunca han sido afectados por git add, así que **Git** no tiene registros de su existencia.

  **Archivos Staged** &rarr; son archivos en **Staging**. Viven dentro de **Git** y hay registro de ellos porque han sido afectados por el comando git add, aunque no sus últimos cambios. **Git** ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando git commit.

  **Archivos Unstaged** &rarr; entiéndelos como archivos “Tracked pero Unstaged”. Son archivos que viven dentro de **Git** pero no han sido afectados por el comando git add ni mucho menos por git commit. **Git** tiene un registro de estos archivos, pero está desactualizado, sus últimas versiones solo están guardadas en el disco duro.

  **Archivos Tracked** &rarr; son los archivos que viven dentro de **Git**, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos git add y git commit.

* Recuerda que hay un caso donde los archivos tienen dos estados al mismo tiempo: **staged** y **untracked**. Esto pasa cuando guardas los cambios de un archivo en el área de Staging (con el comando git add), pero antes de hacer commit para guardar los cambios en el repositorio haces nuevos cambios que todavía no han sido guardados en el área de **Staging**.
