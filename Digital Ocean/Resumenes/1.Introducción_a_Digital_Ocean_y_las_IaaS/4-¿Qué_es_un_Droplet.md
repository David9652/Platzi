# Sesión 4 - ¿Qué es un Droplet?

* **Droplet** es la forma en la que Digital Ocean llama a sus VPS, tienen la ventaja de utilizar discos de tipo SSD con lecturas y escrituras más rápidas que los discos mecánicos convencionales.

* Una **clave SSH** es uno de los dos archivos utilizados en un método de autenticación conocido como autenticación de clave pública SSH. En este método de autenticación, un archivo (conocido como la clave privada) generalmente se mantiene en el lado del cliente y el otro archivo (conocido como la clave pública) se almacena en el lado del servidor. No hay dos pares de claves SSH iguales. Entonces, en teoría, sepuede usar un par para la autenticación. Las claves SSH vienen en muchos tamaños, pero una opción popular es un cifrado RSA de 2048 bits, que es comparativo con una contraseña de 617 dígitos.

## Generar Llave SSH

1. Ir a `$cd \Users\MyUser\` y verificar que el subdirectorio **.ssh** exista. De lo contrario, creélo usando el comando `$mkdir .ssh`.

2. Ingrese al directorio `$cd .ssh\` y genere la llave ssh usando `$ssh-keygen -t rsa`

3. Nombre el archivo de la llave y posteriormente utilice `$ls -l` para verificar la llave pública y privada que se acabaron de crear.

4. Utilice `$cat millave.pub` para verla y agregarla como factor de autenticación en la aplicación.

**NOTA** &rarr; La llave pública es la que tiene extensión .pub

## Conexión SSH

* Para conectarnos a nuestro droplet, utilizamos el comando `$ssh root@ip_address`.

* Una vez conectado, podemos utilizar el comando `$hostname` para saber el nombre de nuestro equipo.

* En caso de que existan problemas con los permisos de acceso, es necesario verificar que los permisos de la llave púlbica id_rsa.pub, estén solamente en el user owner. Si el grupo y otros tienen permisos de ejecución, no te permitirá el uso de la llave pública. Para cambiar el permiso de la llave, se puede hacer de la siguiente manera: `$chmod 700 id_rsa.pub`.

**NOTA** &rarr; Un requerimiento importante por parte de Digital Ocean es que nuestra llave tenga el nombre de **id_rsa.pub** y se encuentre guardada en el directorio .ssh/. En caso de que se quiera utilizar un nombre de llave específico para la autenticación, se debe usar el siguiente comando `$ssh -i millave_rsa root@ip_address`.

## Material Adicional

* [Conexón SSH Digital Ocean](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/ "Conexón SSH Digital Ocean").
