# Sesión 21 - Instalación de MySQL en un Droplet

* Al ejecutar `$grant all privileges on *.* to 'nombre_usuario'@'host'` se le está dando permisos muy elevados al usuario, este podría ejecutar todo lo que quisiera en todas las bases de datos, lo ideal seria: `$grant all privileges on nombre_base_datos.* to 'nombre_usuario'@'host'`
