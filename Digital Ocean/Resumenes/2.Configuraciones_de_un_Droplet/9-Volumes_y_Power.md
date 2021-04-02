# Sesión 9 - Volumes y Power

* Para trabajar con **Volumes** a veces es necesario apagar nuestro droplet, para esto tenemos dos opciones:

    * **Power Off** &rarr; Reiniciar por sistema.
    * **Power Cycle** &rarr; Es un reinicio forzoso, como cuando en un equipo físico presionas el botón de encendido por mucho tiempo. Se pueden perder datos y sólo deber ser usado cuando no tienes más opción.

* `$df -h` &rarr; verificar particiones.

* Los **Volumes** son útiles si quieres guardar las copias de seguridad o archivos de configuración del proyecto. También, se pueden utilizar para hacer partición swapping, es decir, utilizar parte del disco duro como memoria raam.
