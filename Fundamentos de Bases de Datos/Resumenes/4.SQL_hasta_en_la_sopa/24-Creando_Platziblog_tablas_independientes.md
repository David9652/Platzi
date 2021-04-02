# Sesión 24 - Creando Platziblog: tablas independientes

* Una buena práctica para pasar de nuestro diagrama físico a SQL, es comenzar creando las entidades que no tienen una llave foránea.

* Generalmente en los nombres de bases de datos se evita usar eñes o acentos para evitar problemas en los manejadores de las bases de datos.

## Creando Tablas Independientes

```sql

/* Create PLatziblog_Finsl database */
CREATE SCHEMA `platziblog_final` DEFAULT CHARACTER SET utf8 ;

/* Create Category Table */
CREATE TABLE `platziblog_final`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`));

/* Create Tag Table */
CREATE TABLE `platziblog_final`.`tags` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tag_name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`));

/* Create Users Table */
CREATE TABLE `platziblog_final`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(30) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `nickname` VARCHAR(40) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

```
