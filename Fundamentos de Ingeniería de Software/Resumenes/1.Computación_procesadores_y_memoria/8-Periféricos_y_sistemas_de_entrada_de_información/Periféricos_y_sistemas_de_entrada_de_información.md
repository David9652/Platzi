# Sesión 8 - Periféricos y sistemas de entrada de información

* Los sistemas operativos normalmente tienen un núcleo llamado Kernel, que es el principal elemento que los representa y es la primera parte del sistema operativo que se carga en la memoria RAM. El kernel del sistema operativo tiene acceso a todo en nuestra computadora: nuestros archivos, nuestros periféricos, datos de las aplicaciones, etc.

* El kernel, inmediatamente después de ser cargado en RAM, se encarga de cargar los driver: pequeñas piezas de software que permiten interpretar las señales eléctricas del hardware, para que el sistema operativo pueda comunicarse con ellos.

* Luego, tenemos otro set de drivers que pueden ser los controladores de arranque, llamados drivers de aplicación. Cuanto más nos alejamos del kernel, menos privilegios tenemos. Los drivers de aplicación deben pedirle permisos a los drivers anteriores para poder acceder al hardware.

* La última capa la representan las aplicaciones. Esta es la capa que menos permisos tiene, ya que las aplicaciones no deberían poder acceder al hardware directamente.

## Sistema Operativo como anillos

* **Primer Anillo - Kernel** &rarr; El Kernel lo podemos entender como la capa más profunda de nuestro S.O. Por lo tanto, tiene acceso completo a archivos, drivers, programas, etc. Igual que cualquier otro proceso, se carga en la RAM como que es lo primero en cargar. En esta capa también viven programas capaces de encriptar y desencriptar información, de tal forma que ninguna otra capa del S.O. tenga acceso a ellos.

* **Segundo Anillo - Drivers** &rarr; Como se ha dicho antes, los drivers son código que se encargan de interpretar las señales de el hardware y establecer una comunicación con el software del PC. Estos primeros drivers pertenecen a piezas de hardware bastante importantes como la pantalla, el teclado, el mouse, etc. Es importante indicar que entre el primer y el segundo anillo hay un índice de permisos donde están almacenados qué permisos tiene cada aplicación. 

* **Tercer Anillo - Más Drivers** &rarr; Otra capa de drivers carga en un tercer puesto en la RAM. Dado que están más alejados del Kernel, tienen menos permisos y privilegios que los drivers del segundo anillo. Puesto que los drivers de este anillo se comunican en su mayoría con las aplicaciones, es necesario que primero los drivers del tercer anillo pidan permisos a los del segundo anillo para luego así comunicarse con el hardware.

* **Cuarto Anillo - Aplicaciones** Finalmente, la última capa del modelo de anillos del S.O. están las aplicaciones, que se cargan en la RAM para ejecutar procesos. Sin embargo, a diferencia de los otros anillos, no tienen ningún tipo de acceso directo al hardware del PC. Es importante tener en cuenta que así debería ser, pues de lo contrario cualquier Software escrito por terceros tendría la capacidad de acceder casi por completo al PC y a sus piezas de Hardware.