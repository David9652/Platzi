# Sesión 13 - Kernel

* En el mundo de los **droplets** y de Linux tenemos un concepto clave a la hora de manejar los sistemas operativos: el **Kernel** (o núcleo).

* El **Kernel** es el corazón del sistema operativo Linux, es el software que se encuentra entre el sistema operativo (SO) y el hardware del equipo. Veamos por qué es tan importante:

    * Es el encargado de gestionar toda la conexión entre el software y el hardware. Cuando una aplicación le solicita al sistema operativo el acceso a un hardware, como por ejemplo el disco duro para realizar almacenamiento, el SO le solicita a el Kernel el acceso, y este verifica si el recurso físico se le puede prestar a la aplicación.

    *  Es el encargado de gestionar la memoria RAM, es decir, cuando un programa requiere más memoria para poder cargar más información, debe solicitar dicha gestión al Kernel quien se encarga de verificar cuánta memoria hay y entregar de acuerdo a la disponibilidad, también se encarga de liberar la memoria RAM.

    * Se encarga también de la gestión del procesador, es decir, es quien decide qué operaciones tienen más prioridad de ejecución.

* En Digital Ocean tenemos la opción de manipular el **Kernel** de nuestro **Droplet**, es decir, podemos actualizarlo e incluso modifícarlo, sin embargo, se recomienda tener mucha precaución, ya que una actualización o modificación fallida puede dañar el Droplet.
