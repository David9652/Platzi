# Sesión 31 - Utilizando la sentencia FROM

* La sentencia **UNION** elimina las filas repetidas.

* La sentencia **UNION ALL** une completamente las 2 tablas.

## Ejemplos SQL JOINS

```sql

/* START DIFFERENCE */

/* select all users whether or not they have posts associated */
SELECT *
FROM users
LEFT JOIN posts
ON users.id = posts.user_id;

/* select all users that don't have posts associated */
SELECT *
FROM users
LEFT JOIN posts
ON users.id = posts.user_id
WHERE posts.user_id IS NULL

/* select all posts whether or not they have users associated */
SELECT *
FROM users
RIGHT JOIN posts
ON users.id = posts.user_id;

/* select all posts that don't have users associated */
SELECT *
FROM users
RIGHT JOIN posts
ON users.id = posts.user_id
WHERE users.id IS NULL

/* END DIFFERENCE */

/* START INTERSECTION */

/* select all posts and users that are associated between themselves */
SELECT *
FROM users
INNER JOIN posts
ON users.id = posts.user_id;

/* END INTERSECTION */

/* START UNION */

/* select all users whether or not they have posts associated (LEFT JOIN) UNION /* select all posts whether or not they have users associated (RIGHT JOIN). This query is also known as FULL OUTER JOIN. */  */
SELECT *
FROM users
LEFT JOIN posts
ON users.id = posts.user_id
UNION
SELECT *
FROM users
RIGHT JOIN posts
ON users.id = posts.user_id;

/* END UNION */

/* START SYMMETRIC DIFFERENCE */

/* select all users that don't have posts associated (LEFT JOIN + WHERE) UNION select all posts that don't have users associated (RIGHT JOIN + WHERE) */
SELECT *
FROM users
LEFT JOIN posts
ON users.id = posts.user_id
WHERE posts.user_id IS NULL
UNION
SELECT *
FROM users
RIGHT JOIN posts
ON users.id = posts.user_id
WHERE users.id IS NULL

/* END SYMMETRIC DIFFERENCE */
```
