# Sesión 38 - Preguntándole a la base de datos

* **GROUP_CONCAT** toma el resultado del query y lo pone como campo separado por comas.

## Ejemplos Preguntas del Negocio

```sql

/* ¿ Cuántas etiquetas tiene un post ? */
SELECT post_id, title, COUNT(*) AS number_of_tags
FROM posts_tags
INNER JOIN posts
ON posts_tags.post_id = posts.id
GROUP BY post_id
ORDER BY number_of_tags DESC

/* ¿ Cuáles son las etiquetas que tiene un post ? (Sin Concatenar) */
SELECT posts.id, posts.title, tags.tag_name
FROM posts
INNER JOIN posts_tags ON posts.id = posts_tags.post_id
INNER JOIN tags ON tags.id = posts_tags.tag_id
GROUP BY posts.id, tags.tag_name
ORDER BY posts.id ASC

/* ¿ Cuáles son las etiquetas que tiene un post ? (Concatenando) */
SELECT posts.id, posts.title, GROUP_CONCAT(tags.tag_name)
FROM posts
INNER JOIN posts_tags ON posts.id = posts_tags.post_id
INNER JOIN tags ON tags.id = posts_tags.tag_id
GROUP BY posts.id
ORDER BY posts.id ASC

```
