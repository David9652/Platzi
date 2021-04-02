# Sesión 36 - El interminable agujero de conejo (Nested queries)

* Los **Nested queries** significan que dentro de un query podemos hacer otro query. Esto sirve para hacer join de tablas, estando una en memoria. También teniendo un query como condicional del otro.

* Este proceso puede ser tan profundo como quieras, teniendo infinitos queries anidados.

* Se le conoce como un producto cartesiano ya que se multiplican todos los registros de una tabla con todos los del nuevo query. Esto provoca que el query sea difícil de procesar por lo pesado que puede resultar.

## Ejemplos Nested Queries

```sql

SELECT table_in_memory.date, COUNT(*) AS post_count
FROM(
	SELECT DATE(MIN(creation_date)) AS date, YEAR(creation_date) AS post_year
	FROM posts
    GROUP BY post_year
    ) AS table_in_memory
GROUP BY table_in_memory.date
ORDER BY table_in_memory.date ASC

/* Trae el post que tenga la fecha publicación más reciente */
SELECT *
FROM posts
WHERE creation_date = (
	SELECT MAX(creation_date)
    FROM posts
    )

```
