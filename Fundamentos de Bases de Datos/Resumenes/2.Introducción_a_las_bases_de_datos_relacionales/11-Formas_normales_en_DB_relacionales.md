# Sesión 11 - Formas normales en DB relacionales

* La normalización en las bases de datos relacionales es uno de esos temas que, por un lado es sumamente importante y por el otro suena algo esotérico.

## Primera Forma Normal (1FN)

* Esta FN nos ayuda a eliminar los valores repetidos y no atómicos dentro de una base de datos.

* Formalmente, una tabla está en primera forma normal si:

    * Todos los atributos son atómicos. Un atributo es atómico si los elementos del dominio son simples e indivisibles.

    * No debe existir variación en el número de columnas.

    * Los campos no clave deben identificarse por la clave (dependencia funcional).

    * Debe existir una independencia del orden tanto de las filas como de las columnas; es decir, si los datos cambian de orden no deben cambiar sus significados.

* Se traduce básicamente a que si tenemos campos compuestos como por ejemplo “nombre_completo” que en realidad contiene varios datos distintos, en este caso podría ser “nombre”, “apellido_paterno”, “apellido_materno”, etc.

* También debemos asegurarnos que las columnas son las mismas para todos los registros, que no haya registros con columnas de más o de menos.

* Todos los campos que no se consideran clave deben depender de manera única por el o los campos que si son clave.

* Los campos deben ser tales que si reordenamos los registros o reordenamos las columnas, cada dato no pierda el significado.

## Segunda Forma Normal (2FN)

* Esta FN nos ayuda a diferenciar los datos en diversas entidades.

* Formalmente, una tabla está en segunda forma normal si:

    * Está en 1FN.

    * Si los atributos que no forman parte de ninguna clave dependen de forma completa de la clave principal. Es decir, que no existen dependencias parciales.

    * Todos los atributos que no son clave principal deben depender únicamente de la clave principal.

* Lo anterior quiere decir que si tenemos datos que pertenecen a diversas entidades, cada entidad debe tener un campo clave separado.

## Tercera Forma Normal (3FN)

* Esta FN nos ayuda a separar conceptualmente las entidades que no son dependientes.

* Formalmente, una tabla está en tercera forma normal si:

    * Se encuentra en 2FN.
    * No existe ninguna dependencia funcional transitiva en los atributos que no son clave.

* Esta FN se traduce en que aquellos datos que no pertenecen a la entidad deben tener una independencia de las demás y debe tener un campo clave propio.

## Cuarta Forma Normal (4FN)

* Esta FN nos trata de atomizar los datos multivaluados de manera que no tengamos datos repetidos entre rows.

* Formalmente, una tabla está en cuarta forma normal si:

    * Se encuentra en 3FN.
    * Los campos multivaluados se identifican por una clave única.

* Esta FN trata de eliminar registros duplicados en una entidad, es decir que cada registro tenga un contenido único y de necesitar repetir la data en los resultados se realiza a través de claves foráneas.

**NOTA** &rarr; Algunos autores precisan una 5FN que hace referencia a que después de realizar esta normalización, a través de uniones (JOIN) permita regresar a la data original de la cual partió.

* [Normalización](https://www.youtube.com/watch?v=UrYLYV7WSHM&ab_channel=channel5567 "Normalización").
