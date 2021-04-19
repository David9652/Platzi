# Sesión 19 - Uso de GitHub

* **GitHub** es una plataforma que nos permite guardar repositorios de **Git**, la cual podemos usar como servidores remotos y ejecutar algunos comandos de forma visual e interactiva (sin necesidad de la consola de comandos).

* El **README.md** es el archivo que veremos por defecto al entrar a un repositorio. Es una muy buena práctica configurarlo para describir el proyecto, los requerimientos y las instrucciones que debemos seguir para contribuir correctamente.

* Para clonar un repositorio desde **GitHub** (o cualquier otro servidor remoto) debemos copiar la URL (por ahora, usando HTTPS) y ejecutar el comando `$git clone [URL_copied]`. Esto descargará la versión de nuestro proyecto que se encuentra en GitHub. Sin embargo, esto solo funciona para las personas que quieren empezar a contribuir en el proyecto. Si queremos conectar el repositorio de **GitHub** con nuestro repositorio local, el que creamos con `$git init`, debemos ejecutar las siguientes instrucciones:

```git
# Primero: Guardar la URL del repositorio de GitHub con el nombre de origin
git remote add origin URL

# Segundo: Verificar que la URL se haya guardado correctamente:
git remote
git remote -v

# Tercero: Traer la versión del repositorio remoto y hacer merge para crear un commit con los archivos de ambas partes. Podemos usar git fetch y git merge o solo el git pull con el flag --allow-unrelated-histories:
git pull origin main --allow-unrelated-histories

# Por último, ahora sí podemos hacer git push para guardar los cambios de nuestro repositorio local en GitHub:
git push origin master
```
