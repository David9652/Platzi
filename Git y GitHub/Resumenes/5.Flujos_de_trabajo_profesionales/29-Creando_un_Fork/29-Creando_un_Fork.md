# Sesión 29 - Creando un Fork

* Los **forks** o **biburfaciones** son una característica única de **GitHub** en la que se crea una copia exacta del estado actual de un repositorio directamente en **GitHub**.

* Al hacer un **fork** de un proyecto en **GitHub**, te conviertes en dueño del repositorio **fork**, puedes trabajar en este con todos los permisos, pero es un repositorio completamente diferente al original, teniendo alguna historia en común.

* Los **forks** son importantes porque es la manera en la que funciona el **open source**, ya que, una persona puede no ser colaborador de un proyecto, pero puede contribuír al mismo, haciendo mejor software que pueda ser utilizado por cualquiera.

* Al hacer un **fork**, **GitHub** sabe que se hizo **fork** del proyecto, por lo que se le permite al colaborador hacer **pull request** desde su repositorio propio.

## Trabajando con más de un repositorio remoto

* Cuando trabajas en un proyecto que existe en diferentes repositorios remotos (normalmente a causa de un **fork**) es muy probable que desees poder trabajar con ambos repositorios, para esto puedes crear una conexión adicional al repositorio remoto "original" y así tener un nuevo flujo de trabajo:

```bash
git remote add [nombre_conexión_remota] [url_repositorio_remoto] # Por lo general se usa "upstream" como nombre de la conexión remota hacia el repositorio "original"
git pull upstream master
git push origin master
```
