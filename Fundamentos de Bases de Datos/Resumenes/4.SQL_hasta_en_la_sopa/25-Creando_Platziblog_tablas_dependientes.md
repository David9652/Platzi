# Sesión 25 - Creando Platziblog: tablas dependientes

* El comando **cascade** sirve para que cada que se haga un update en la tabla principal, se refleje también en la tabla en la que estamos creando la relación.

* Cuando se vaya a crear una llave foránea, es necesario que la llave sea del mismo tipo y longitud de las tablas que provienen.

## Foreign Key Options

Las **Foreing Key Options** son las siguientes:

### On Update

* Significa qué pasará con las relaciones cuando una de estas sea modificada en sus campos relacionados. Los valores permitidos son los siguientes:

  * **CASCADE** &rarr; Si el id de un usuario se actualiza de 11 a 12, la tabla relacionada también se actualizará con el nuevo valor en los registros correspondientes. No se romperá la relación.

  * **RESTRICT** &rarr; Si el id de un usuario se actualiza de 11 a 12, no lo permitirá hasta que todos los registros que tienen asociado ese id, sean actualizados primero.

  * **SET NULL** &rarr; Si el id de un usuario pasa de 11 a 12, el registro que tiene asociado ese valor específico, quedará en nulo.

  * **NO ACTION** &rarr; Si el id de un usuario se actualiza de 11 a 12, no se hará nada. Solo se romperá la relación.

### On Delete

* Significa qué pasará con las relaciones cuando una de estas sea eliminada en sus campos relacionados. Los valores permitidos son los siguientes:

  * **CASCADE** &rarr; Si el id de un usuario es eliminado, la tabla relacionada eliminará todas los registros asociados con ese valor.

  * **RESTRICT** &rarr; No se podrá eliminar el registro de la tabla principal hasta que se eliminen primero todas las relaciones que tenga ese campo.

  * **SET NULL** &rarr; Si el id de un usuario es eliminado, los registros asociados con ese valor en específico, quedarán en nulo.

  * **NO ACTION** &rarr; Si el id de un usuario es eliminado, no se hará nada. Solo se romperá la relación.

## Creando Tablas Dependientes

```sql

/* Create posts table without foreign keys */
CREATE TABLE `platziblog_final`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NOT NULL,
  `creation_date` TIMESTAMP NULL,
  `content` TEXT NOT NULL,
  `status` CHAR(8) NULL DEFAULT 'active',
  `user_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`));

/*  Associate foreign keys */

ALTER TABLE `platziblog_final`.`posts`
ADD INDEX `posts_users_idx` (`user_id` ASC) VISIBLE,
ADD INDEX `posts_categories_idx` (`category_id` ASC) VISIBLE;
;
ALTER TABLE `platziblog_final`.`posts`
ADD CONSTRAINT `posts_users`
  FOREIGN KEY (`user_id`)
  REFERENCES `platziblog_final`.`users` (`id`)
  ON DELETE NO ACTION
  ON UPDATE CASCADE,
ADD CONSTRAINT `posts_categories`
  FOREIGN KEY (`category_id`)
  REFERENCES `platziblog_final`.`categories` (`id`)
  ON DELETE NO ACTION
  ON UPDATE CASCADE;

```
