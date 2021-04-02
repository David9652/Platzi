# Sesión 22 - DML

* Data Manipulation Language maneja el contenido de las bases de datos. Sus comandos pricnipales son:

## INSERT

* Inserta o agrega nuevos registros a la tabla.

### Ejemplo INSERT

```sql
/* Inserta nuevos registros a  la tabla seleccionada */
INSERT INTO `platziblog`.`people` (`last_name`, `first_name`, `address`, `city`)
VALUES ('Ángel', 'David', 'Calle Falsa #123', 'Colombia'),
('Ángel', 'Daniel', 'Engativá', 'USA'),
('Martínez', 'Sonia', 'Fontibón', 'Colombia')
```

## UPDATE

* Actualiza o modifica los datos que ya existen.

### Ejemplo UPDATE

```sql
/* UPDATE Específicamente de un registro */
UPDATE `platziblog`.`people`
SET last_name = 'Chávez', city = 'Mérida'
WHERE person_id = 1

/* UPDATE Inseguro porque muchos registros pueden cumplir esa función */
UPDATE `platziblog`.`people`
SET first_name = 'Juan',
WHERE city = 'Mérida'

/* UPDATE aún más inseguro porque no tiene la claúsula WHERE y afectaría a todos los registros de esa tabla */
UPDATE `platziblog`.`people`
SET first_name = 'Juan',
```

## DELETE

* Esta sentencia es riesgosa porque puede borrar el contenido de una tabla.

### Ejemplo DELETE

```sql
/* DELETE solamente la fila seleccionada */
DELETE FROM `platziblog`.`people`
WHERE person_id = 1

/* DELETE todos los datos de la tabla seleccionada */
DELETE FROM `platziblog`.`people`
```

## SELECT

* Trae información de la base de datos.

### Ejemplo SELECT

```sql

/* Trae todos los first_name y last_name de la tabla seleccionada */
SELECT first_name, last_name
FROM `platziblog`.`people`
```
