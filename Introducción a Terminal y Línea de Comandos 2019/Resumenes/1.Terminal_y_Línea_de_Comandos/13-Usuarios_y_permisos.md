# Sesión 13 - Usuarios y Permisos

* La administración de usuarios y permisos cambia mucho entre diferentes sistemas operativos, sin embargo, los tipos de permisos son iguales para todos.

## Ver permisos de un archivo

* Ejecutar el comando **ls-lh**

```
drwxr-xr-x 1 david 197609    0 Feb 26 20:15  Desktop/
drwxr-xr-x 1 david 197609    0 Jan 12 18:30  Documents/
drwxr-xr-x 1 david 197609    0 Mar  4 18:15  Downloads/
drwxr-xr-x 1 david 197609    0 Mar  3 12:17  Dropbox/
drwxr-xr-x 1 david 197609    0 Jan 12 18:30  Favorites/
```

## Clasificación de permisos

* `drwxr-xr-x 1 david 197609    0 Feb 26 20:15  Desktop/`

* Teniendo en cuenta el anterior ejemplo, los permisos se pueden separar de la siguiente manera:

* (-) (d) &rarr; dir/link/file.

* (- - -)(rwx) &rarr; Permisos del owner (david).

* (- - -)(r-x) &rarr; Permisos del grupo (staff).

* (- - -)(r-x) &rarr; Permisos de todo el mundo (anyone).

## Tipos de permisos:

* r–- &rarr; Permiso de lectura.

* rw- &rarr; Permiso de lectura y escritura.

* rwx &rarr; Permiso de lectura, escritura y ejecución.

## Valores en los permisos

* Los permisos tienen valores numéricos.

* r &rarr; 4

* w &rarr; 2

* w &rarr; 1

## Otorgar permisos

* Para asignar los permisos se debe de dar el número tanto para el owner, el grupo y el público.

* ---/---/---

* 666 &rarr; rw-rw-rw-

* 750 &rarr; rwxr-x---

## Cambiar permisos

* Para cambiar los permisos de un archivo se utiliza el siguiente comando:

* **chmod [numero] [archivo]** &rarr; `$ chmod 750 archivo.txt`

## Ejecutar como super user

* Ejecuta un comando como súper usuario.

* **sudo [script/comando]** &rarr; `$ sudo apt-get`

## Convertir archivos a ejecutable

* Para convertir un archivo a ejecutable, se debe especificar en la primera línea la ruta del ejecutable.

* **(#! [ruta del ejecutable])** 

 ```
#! /usr/local/bin/php
<?php
date_default_timezone_set("America/Bogota");
printf("%s\n", data("Y-m-d H:`
i:s"));
```
* **NOTA** &rarr; #! necesariamente debe incluirse al inicio del archivo (primera línea).

* En este caso, estamos indicando a ** /usr/local/bin/php** que ejecute el comando que está en las líneas posteriores. De este modo, cuando ejecutamos **ejemplo.php** se ejecuta automáticamente (si tenemos los permisos) y ya no hay que indicar quién se va a encargar de su ejecución. A continuación se encuentra el ejemplo &rarr; `$  ./ejemplo.php`

## ¿Cuáles son los usuarios que alguna vez han sido dados de alta en tu sistema?

* Se puede ejecutar una vista del directorio en etc/passwd

* `$cat /etc/passwd` &rarr; usuario1:FXWUuZ.vwXttgG : 500: 501 : iliss:/home/usuario1:/bin/bash

```
usuario1:	Nombre de la cuenta (Login).
FXWUuZ.vwXttg: Clave de acceso encriptada (password).
500: UID de esta cuenta. El UID de cuenta 0, pertenece al administrador (root).
501: GID del grupo principal al que pertenece la cuenta.
iliss: Nombre del usuario.
/home/usuario1: Directorio de trabajo del usuario1.
/bin/bash: Interprete de comandos predeterminada (shell).
```

## Crear usuario Linux

* Se utiliza el comando **useradd** con la sintaxis:

* **useradd [opciones] nombre-usuario**

	* **-g** &rarr; Grupo principal que queremos tenga el usuario (debe existir previamente)

	* **-m** &rarr; Crear carpeta home si es que no existe.

	* **-d** &rarr; Carpeta home del usuario. Suele ser /home/nombre-usuario

	* **-s** &rarr; Intérprete de comandos (shell) del usuario. Suele ser /bin/bash.

* **Ejemplo**

	* Si deseamos crear un usuario llamado **alberto**, cuyo grupo principal sea **profesores**, cuya carpeta home sea **/home/alberto** y su intérprete de comandos sea **/bin/bash**, ejecutaremos el siguiente comando:

`$ sudo useradd -g profesores -d /home/alberto -m -s /bin/bash alberto`

* Tan solo nos quedará establecer su contraseña con el comando **passwd**

`$ sudo passwd alberto`

* Entonces el sistema nos preguntará dos veces la contraseña que queremos asignar a alberto.

* http://eltallerdelbit.com/usuarios-grupos-linux

* http://www.ite.educacion.es/formacion/materiales/85/cd/linux/m1/administracin_de_usuarios_y_grupos.html

## Permisos Especiales

### ¿Qué significa cuando un archivo tiene en los permisos el @?

* Es algo especifico de MacOS, indica que el archivo tiene atributos extendidos. 

`-rw-r–r--@`

### ¿Qué significa cuando un archivo tiene al lado de su nombre ~?

```
test.php
test.php~
```

* Ese segundo archivo es un archivo temporal, siempre que abres un archivo sea cual sea, se abre uno igual que termina en ese simbolo. algo parecido sucede también en windows.

* **whoami** &rarr; Indica cuál es el usuario que está operando en ese momento.

* **which php** &rarr; Permite saber desde donde se ejecuta un programa.
