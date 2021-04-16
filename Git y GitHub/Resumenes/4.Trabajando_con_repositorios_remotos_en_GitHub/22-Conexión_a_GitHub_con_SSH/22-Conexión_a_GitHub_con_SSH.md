# Sesión 22 - Conexión a GitHub con SSH

* Luego de crear nuestras llaves **SSH** podemos entregarle la llave pública a **GitHub** para comunicarnos de forma segura y sin necesidad de escribir nuestro usuario y contraseña todo el tiempo. Para esto debes entrar a la **Configuración de Llaves SSH en GitHub**, crear una nueva llave con el nombre que le quieras dar y el contenido de la llave pública de tu computadora.

* Ahora podemos actualizar la URL que guardamos en nuestro repositorio remoto, solo que, en vez de guardar la URL con HTTPS, vamos a usar la URL con SSH:

`$git remote set-url origin url-ssh-del-repositorio-en-github`
