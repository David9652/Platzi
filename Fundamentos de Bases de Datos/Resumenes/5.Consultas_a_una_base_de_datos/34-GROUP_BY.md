# Sesión 34 - GROUP BY

* **GROUP BY** tiene que ver con agrupación. Indica a la base de datos qué criterios debe tener en cuenta para agrupar.

* Además de la función **COUNT**, se pueden utilizar las siguientes funciones:
    * **AVG** &rarr; Calcula el promedio
    * **COUNT** &rarr; Cuenta los registros de un campo
    * **SUM** &rarr; Suma los valores de un campo
    * **MAX** &rarr; Devuelve el maximo de un campo
    * **MIN** Devuelve el mínimo de un campo

## Ejemplos GROUP BY

```sql

/* Cuenta y agrupa los posts por status */
SELECT status, COUNT(*) AS post_quantity
FROM posts
GROUP BY status

/* Cuenta y agrupa los posts por su año de creación */
SELECT YEAR(creation_date) AS creation_year, COUNT(*) AS post_quantity
FROM posts
GROUP BY creation_year

/* Cuenta y agrupa los posts por su mes de creación que tengan un estado de activo */
SELECT MONTHNAME(creation_date) AS creation_month, COUNT(*) AS post_quantity
FROM posts
WHERE status = 'activo'
GROUP BY creation_month

/* Cuenta, agrupa y organiza los posts por status y su mes de creación*/
SELECT status, MONTHNAME(creation_date) AS creation_month, COUNT(*) AS post_quantity
FROM posts
GROUP BY status, creation_month
ORDER BY status, creation_month;

```
