# Sesión 8 - Diagrama Físico: tipos de datos y constraints

* Para llevar a la práctica un diagrama, se debe ir más allá y darle detalle con parámetros como:

## Tipos de Datos

* Texto &rarr; CHAR(n), VARCHAR(n), TEXT
* Números &rarr; INTEGER, BIGINT, SMALLINT, DECIMAL(n,s), NUMERIC(n,s)
* Fecha/hora &rarr; DATE, TIME, DATETIME, TIMESTAMPn
* Lógicos &rarr; BOOLEAN

## Constraints (Restricciones)

* NOT NULL &rarr; Se asegura que la columnna no tenga valores nulos.
* UNIQUE &rarr; Se asegura que cada valor en la columna no se repita.
* PRIMARY KEY &rarr; Es una combinación de NOT NULL y UNIQUE.
* FOREIGN KEY &rarr; Identifica de manera única una tupla en otra tabla.
* CHECK &rarr; Se asegura que el valor en la columna cumpla una condición dada.
* DEFAULT &rarr; Coloca un valor por defecto cuando no hay un valor especificado.
* INDEX &rarr; Se crea por columna para permitir búsquedas más rápidas.

## Información Adicional

* Para guardar imágenes, videos o audios en las bases de datos se puede utilizar una referencia a la imagen/video/audio donde se guarda el conjunto de archivos en una ruta especifica y solo se almacena dicha ruta, el nombre y la extensión. Por otra parte, existen lenguajes de programación y herramientas que permiten tomar una imagen y codificarla, teniendo como resultado un string o una serie de números equivalentes a la imagen, se podría almacenar estos datos en un atributo específico y cuando se necesite la imagen original, simplemente se decodificaría esta información.

* Para almacenar archivos binarios existe un tipo de dato llamado [BLOB](https://www.digitalocean.com/community/tutorials/how-to-use-the-mysql-blob-data-type-to-store-images-with-php-on-ubuntu-18-04-es "BLOB"), el cual puede ser utilizado para guardar archivos de imagen, multimedia y PDF.

* [Diferencia entre VARCHAR y CHAR](https://stackoverflow.com/questions/1885630/whats-the-difference-between-varchar-and-char "Diferencia entre VARCHAR y CHAR").

* [COLLATIONs y los CHARSETs](https://blog.unreal4u.com/2012/08/sobre-collation-y-charset-en-mysql/ "COLLATIONs y los CHARSETs").

* [Mecanismos de Almacenamiento de Datos](https://es.stackoverflow.com/questions/55741/cuando-utilizar-myisam-y-cuando-innodb "Mecanismos de Almacenamiento de Datos").
