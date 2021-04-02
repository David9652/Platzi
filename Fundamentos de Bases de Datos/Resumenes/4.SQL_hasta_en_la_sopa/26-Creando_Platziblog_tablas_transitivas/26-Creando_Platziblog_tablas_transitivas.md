# Sesión 26 - Creando Platziblog: tablas transitivas

* Las tablas transitivas sirven como puente para unir dos tablas. No tienen contenido semántico.

* **Reverse Engineer** nos produce el esquema del cual nos basamos para crear nuestras tablas. Es útil cuando llegas a un nuevo trabajo y quieres entender cuál fue la mentalidad que tuvieron al momento de crear las bases de datos.

## Terminando Tablas Dependientes y Creación Tabla Transitiva

```sql

/* Create comments table */

CREATE TABLE `platziblog_final`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL,
  `user_id` INT NOT NULL,
  `post_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `comments_users_idx` (`user_id` ASC) VISIBLE,
  INDEX `comments_post_idx` (`post_id` ASC) VISIBLE,
  CONSTRAINT `comments_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `platziblog_final`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comments_post`
    FOREIGN KEY (`post_id`)
    REFERENCES `platziblog_final`.`posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

/* Create transitive table */

CREATE TABLE `platziblog_final`.`posts_tags` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `posts_tags_posts_idx` (`post_id` ASC) VISIBLE,
  INDEX `posts_tags_tags_idx` (`tag_id` ASC) VISIBLE,
  CONSTRAINT `posts_tags_posts`
    FOREIGN KEY (`post_id`)
    REFERENCES `platziblog_final`.`posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `posts_tags_tags`
    FOREIGN KEY (`tag_id`)
    REFERENCES `platziblog_final`.`tags` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

```
