# Sesión 32 - WHERE

* **WHERE** es la sentencia que nos ayuda a filtrar tuplas o registros dependiendo de las características que elegimos.

* La propiedad **LIKE** nos ayuda a traer registros de los cuales conocemos sólo una parte de la información.

* La propiedad **BETWEEN** nos sirve para arrojar registros que estén en el medio de dos. Por ejemplo, los registros con id entre 20 y 30.

* Es importante mencionar que los operadores **LIKE** y **BETWEEN AND**, pueden ser negados con **NOT**.

## Ejemplos WHERE

```sql

/* Only the posts where the id is greater than or equal to 5 */
SELECT *
FROM posts
WHERE id>=5;

/* Only the posts where the status is inactive */
SELECT *
FROM posts
WHERE status='inactivo';

/* Only the posts where the status is different from inactive */
SELECT *
FROM posts
WHERE status !='inactivo';

/* Only the posts where title has the word 'escandalo' */
SELECT *
FROM posts
WHERE title LIKE '%escandalo%';

/* Only the posts where title does NOT end with the word 'roja' */
SELECT *
FROM posts
WHERE title NOT LIKE '%roja';

/* Only the posts where creation_date are between the given date */
SELECT *
FROM posts
WHERE creation_date BETWEEN '2025-01-01' AND '2026-01-01'

/* Only the posts where the creation_date year is between the given date */
SELECT *
FROM posts
WHERE YEAR(creation_date) BETWEEN '2023' AND '2024'

/* Only the posts where the creation_date month is '04' */
SELECT *
FROM posts
WHERE MONTH(creation_date) = '4'

```
