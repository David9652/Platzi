# Sesión 8 - Panel de Control, Projects y Access

* Un **proyecto** es la forma de agrupar nuestros recursos en Digital Ocean.

## Consejos de Seguridad Informática

* Para reconocer que alguien está intentando loggearse a nuestro servidor, es necesario revisar el archivo [auth.log](https://www.tecmint.com/find-failed-ssh-login-attempts-in-linux/ "auth.log")

* Cambiar los puertos estándares de los servicios evita que escáneres de red automatizados (como Shodan.io) puedan encontrar fácilmente tus servicios.

* Para cambiar el puerto de tu servicio SSH, puedes dirigirte a la carpeta `$/etc/ssh` y abrir el archivo **shd_config** para modificar el puerto. Después, es necesario reiniciar el servicio utilizando el comando [systemctl](https://geekland.eu/systemctl-administrar-servicios-linux/ "systemctl")  como se muestra a continuación: `$systemctl reload sshd`

* No es necesario cambiar regularmente los puertos, es útil si los cambias una vez, y bloqueas el acceso a IPs que no estén autorizadas en tu listado en `$/etc/host.allow`
