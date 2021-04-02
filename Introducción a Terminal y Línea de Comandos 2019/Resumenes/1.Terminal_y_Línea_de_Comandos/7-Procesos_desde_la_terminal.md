# Sesión 7 - Procesos desde la terminal

* Cada vez que ejecutamos algo en nuestra computadora es un proceso que está registrado de alguna forma. El orden en que esto se ejecuta y la cercanía del procesador son muy importantes para las prioridades que se le va a dar a dicho proceso.

* **top** &rarr; Ver todos los procesos que están corriendo en la computadora de manera interactiva.

* **ps -wA** &rarr; Muestra todos los procesos que se están ejecutando y desde donde vienen (no es interactivo)

* **kill -9 [proceso id]** &rarr; Matar procesos.

* **& (ampersand)** &rarr; Ejecutar en segundo plano (background).

* **; (semicolon)** &rarr; Separar procesos para que se ejecuten en una misma linea. El segundo proceso se ejecuta cuando termine el anterior.

* **ps -wA | wc -l** &rarr; Muestra la cantidad de procesos que se están ejecutando actualmente.

* **uptime** &rarr; Muestra cuánto tiempo lleva prendida la computadora - Cuántos usuarios se han logueado - La carga promedio