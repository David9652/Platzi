# Sesión 35 - ORDER BY y HAVING

* La sentencia **ORDER BY** maneja el criterio de ordenamiento de los datos, algunos criterios de ordenación son los siguientes:

    * **ASC** &rarr; Sirve para ordenar de forma ascendente.
    * **DESC** &rarr; Sirve para ordenar de forma descendente.
    * **LIMIT** &rarr; Se usa para limitar la cantidad de resultados que arroja el query.

* **HAVING** tiene una similitud muy grande con **WHERE**, sin embargo, este solamente se utiliza cuando se quieren filtar después de haber agrupado.

## Ejemplos ORDER BY & HAVING

```sql

/* Ordena los posts descendentemente según la fecha de publiación */

SELECT *
FROM posts
ORDER BY creation_date DESC;

/* Ordena los posts ascendentemente de forma alfabética A-Z con un máximo de 5 registros */
SELECT *
FROM posts
ORDER BY title ASC
LIMIT 5;

/* Agrupa, filtra y oderna los posts según ciertos criterios */
SELECT MONTHNAME(creation_date) AS creation_month, status, COUNT(*) post_quantity
FROM posts
GROUP BY status, creation_month
HAVING post_quantity > 1
ORDER BY creation_month

```
