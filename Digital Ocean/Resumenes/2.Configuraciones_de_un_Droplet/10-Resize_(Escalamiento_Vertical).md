# Sesión 10 - Resize (Escalamiento vertical)

* Resize o escalamiento vertical es cuando agregamos más recursos a nuestro droplet como son: memoria RAM, CPU o almacenamiento.

* Existe también el escalamiento horizontal que es cuando agregamos más droplets.

* Se puede re-escalar el Disco Duro, pero no es reversible, ya que al guardar archivos en el Disco Duro, se van desfragmentando con el tiempo. Es por esta razón que se debe utilizar los **volumes** para ampliar de manera escalable el tamaño del Droplet.

* `$cat /proc/meminfo` &rarr; verificar información de la memoria raam.
* `$cat /proc/cpuinfo` &rarr; verificar información de la CPU.
