# Sesión 20 - CREATE VIEW y DDL ALTER

## VIEWS

* Las **Vistas** o **VIEWS** son consultas realizadas a las bases de datos que se presentan en forma de tabla y suelen hacerse de recurrente. Las vistas tienen la misma estructura que una tabla: filas y columnas. La única diferencia es que sólo se almacena de ellas la definición, no los datos. 

* Las vistas se mantienen en memoria.

### Ejemplo VIEWS

```sql
/* Creando una vista */
USE `platziblog`;
CREATE OR REPLACE VIEW `v_platzi_people` AS
SELECT * FROM platziblog.people;

/* Definición de la vista previamente creada */
CREATE
    ALGORITHM = UNDEFINED
    DEFINER = `root`@`localhost`
    SQL SECURITY DEFINER
VIEW `v_platzi_people` AS
    SELECT
        `people`.`person_id` AS `person_id`,
        `people`.`last_name` AS `last_name`,
        `people`.`first_name` AS `first_name`,
        `people`.`address` AS `address`,
        `people`.`city` AS `city`
    FROM
        `people`
/* Ejecutando una vista */
SELECT * FROM platziblog.v_platzi_people;
```

## ALTER

* Se utiliza para añadir, eliminar o modificar columnas de una tabla.

### Ejemplo ALTER

```sql
/*Agrega una nueva columna*/
/* Click derecho en la tabla >> Alter Table */
ALTER TABLE `platziblog`.`people`
ADD COLUMN `date_of_birth` DATETIME NULL AFTER `city`;

/*Modifica el tipo de dato de una columna*/
ALTER TABLE `platziblog`.`people`
CHANGE COLUMN `date_of_birth` `date_of_birth` TIMESTAMP NULL DEFAULT NULL ;

/*Elimina una columna*/
/* Para eliminar una columna en Workbench, seleccionamos con click derecho >> Delete selected */
ALTER TABLE `platziblog`.`people`
DROP COLUMN `date_of_birth`;
```

## Ejemplo INSERT

```sql
/*Inserta valores a una tabla*/
INSERT INTO `platziblog`.`people` (`last_name`, `first_name`, `address`, `city`)
VALUES ('Vásquez', 'Israel', 'Calle Famosa Num 1', 'México'),
('Hernández', 'Mónica', 'Reforma 222', 'México'),
('Alanis', 'Edgar', 'Central 1', 'Monterrey');
```
