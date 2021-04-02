# Sesión 39 - Consultando PlatziBlog

* Para usar abreviaciones o alias, se hace con la keyword **AS**.

* Para eliminar valores repetidos de una concatenación, usamos **DISTINCT**.

## Ejemplos Preguntas del Negocio Parte 2

```sql

/* ¿ Cuántas categorías hay por post? Se ordenará de acuerdo al que tenga más categorías */
SELECT categories.id, categories.category_name, COUNT(*) AS category_count
FROM categories
INNER JOIN posts ON categories.id = posts.category_id
GROUP BY categories.id
ORDER BY category_count DESC

/* ¿ Cuál es la categoría con más posts? */
SELECT categories.id, categories.category_name, COUNT(*) AS category_count
FROM categories
INNER JOIN posts ON categories.id = posts.category_id
GROUP BY categories.id
ORDER BY category_count DESC
LIMIT 1

/* ¿ Cuáles son los 3 usuarios que más han creado posts? */
SELECT users.id, users.nickname, COUNT(*) AS user_count
FROM users
INNER JOIN posts ON users.id = posts.user_id
GROUP BY users.id
ORDER BY user_count DESC
LIMIT 3

/* ¿ Cuáles son los 3 usuarios que más han creado posts y cuáles son las categorías sobre las que han escrito sus posts */

SELECT users.id, users.nickname, COUNT(*) AS user_count, GROUP_CONCAT(DISTINCT(category_name))
FROM users
INNER JOIN posts ON users.id = posts.user_id
INNER JOIN categories ON categories.id = posts.category_id
GROUP BY users.id
ORDER BY user_count DESC
LIMIT 3

```
