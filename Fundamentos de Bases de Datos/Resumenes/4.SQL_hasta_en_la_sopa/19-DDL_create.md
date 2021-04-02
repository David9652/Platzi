# Sesión 19 - DDL create

* Los comandos de SQL están divididos en 4 subgrupos: DDL, DML, DCL y TCL.

## Data Definition Language (DDL)

* Nos ayuda a crear la estructura de una base de datos. Existen 3 grandes comandos:

    * Create &rarr; Nos ayuda a crear bases de datos, tablas, vistas, índices, etc.
    * Alter &rarr; Ayuda a alterar o modificar entidades.
    * Drop &rarr; Nos ayuda a borrar objetos de una base de datos.

### Ejemplo Create

```sql
/* Crear una base de datos  */
CREATE SCHEMA 'platziblog';
USE SCHEMA 'platziblog';
/* DATABASE o SCHEMA es lo mismo */

/* Crear una tabla  */
CREATE TABLE `platziblog`.`people` (
  `person_id` INT NOT NULL AUTO_INCREMENT COMMENT 'People\'s identifier',
  `last_name` VARCHAR(255) NULL,
  `first_name` VARCHAR(255) NULL,
  `address` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  PRIMARY KEY (`person_id`))
ENGINE = InnoDB
COMMENT = 'Table used to manage the main information about people';
```

* Habilitar la opción **Set as default schema** para que el RDBMS sepa que esa será la bases de datos que vamos a utilizar por defecto en las consultas.

* Para más información sobre [DDL, DML, DCL y TCL](https://www.w3schools.in/mysql/ddl-dml-dcl/ "DDL, DML, DCL y TCL ")

* [Motores en las bases de datos: InnoDB Vs MyIsam](https://es.stackoverflow.com/questions/55741/cuando-utilizar-myisam-y-cuando-innodb "Motores en las bases de datos: InnoDb Vs MyIsams ")
