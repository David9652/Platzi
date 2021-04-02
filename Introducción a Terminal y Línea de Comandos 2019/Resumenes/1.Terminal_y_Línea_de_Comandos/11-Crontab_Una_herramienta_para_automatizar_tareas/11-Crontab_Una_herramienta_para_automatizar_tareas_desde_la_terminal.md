# Sesión 11 - Crontab: Una herramienta para automatizar tareas desde la terminal

* Una de las herramientas más potentes de los sistemas UNIX, que nos permite programar la ejecución de diferentes scripts es conocida como crontab. Este administrador regular de procesos en segundo plano nos ayuda a automatizar tareas como respaldar una base de datos, obtener información de tráfico de usuarios durante el transcurso del día, etc.

## crontab

* **contrab -l** &rarr; Despliega los crontabs que tenemos instalados.
* **contrab -e** &rarr; edita las tareas que tengo agendadas.
* **Columna 1** &rarr; Minuto 0-59.
* **Columna 2** &rarr; Hora 0-23.
* **Columna 3** &rarr; Día del mes 1-31.
* **Columna 4** &rarr; Mes 1-12.
* **Columna 5** &rarr; Día de la semana 0-7 (donde 0 equivale a Domingo).
* **Columna 6** &rarr; Script o comando que queremos que se ejecute.

**NOTA** &rarr; Recuerda que crontab se ejecuta si y solo si la computadora está encendida.

* **Ejemplo 1 (Columna 1)**

	* 1 &rarr; Se ejecuta en el minuto 1.
	* 1,10,18 &rarr; Se ejecuta en el minuto 1, 10 y 18.
	* */5 &rarr; Se ejecuta cada 5 minutos.
	* 1-10 &rarr; Se ejecuta los primeros 10 minutos de cada hora.
	* (*) &rarr; Se ejecuta cada minuto.

* **Ejemplo 2**

	* `*/15 4 * * * script.sh >> output_cron 2>&1` Ejecuta el script.sh cada 15 minutos a las 4a.m., todos los días del mes, todos los meses, todos los días de la semana. El resultado del **std_out** y **std_error** se guardan en un archivo llamado **output_cron**.

* **Ejemplo 3**

	 * Ejecuta el 	script **hora.php** en el minuto 0, todas las horas, todos los días del mes, todos los meses, todos los días de la semana. El resultado del **std_out** y **std_error** se guardan en un archivo llamado **salida.log**, el cual debe mostrar la hora en Bogotá D.C.

```php
<?php
date_default_timezone_set("America/Bogota");
printf("%s\n",date("Y-m-d H:i:s"));
?>
```

`0	*	*	*	*	php ~/Desktop/hora.php >> ~/Desktop/salida.log 2>&1`

* Para más información sobre crontab y Vi &rarr; https://blog.elyager.com/crontab/ - https://www.unirioja.es/cu/enriquez/docencia/Quimica/vi.pdf - https://www.linuxtotal.com.mx/index.php?cont=info_admon_010.

* Existe una herramienta llamada [Cronitor](https://cronitor.io/?utm_source=crontabguru&utm_campaign=cronitor "Cronitor") que nos permite enviar alertas cuando una tarea falla o nunca inicia.

## Archivos de Configuración Linux

* https://elpuig.xeill.net/Members/rborrell/articles/los-archivos-bashrc-bash_profile-etc-bashrc-etc-profile-los-archivos-bashrc-bash_profile-etc-bashrc-etc-profile-cual-utilizar

## Configuración Variables Globales ($EDITOR - $PATH)

* **Linux** 

	* https://www.sysadmit.com/2016/04/linux-variables-de-entorno-permanentes.html

	* https://askubuntu.com/questions/432524/how-do-i-find-and-set-my-editor-environment-variable

	* https://rootsudo.wordpress.com/2014/04/06/el-path-la-ruta-de-linux-variables-de-entorno/

	* https://stackoverflow.com/questions/3539594/change-the-default-editor-for-files-opened-in-the-terminal-e-g-set-it-to-text

* **MAC** 

	* `https://medium.com/@himanshuagarwal1395/setting-up-environment-variables-in-macos-sierra-f5978369b255`

	* https://natelandau.com/my-mac-osx-bash_profile/

	* https://stackoverflow.com/questions/135688/setting-environment-variables-on-os-x

	* https://blog.bejarano.io/fixing-cron-jobs-in-mojave.html