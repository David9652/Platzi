# Sesión 29 - SELECT

* **SELECT** se encarga de proyectar o mostrar datos.

* El nombre de las columnas o campos que estamos consultando puede ser cambiado utilizando **AS** después del nombre del campo y poniendo el nuevo que queremos tener. **AS** también es conocido como un **alias** y puede ser usado en consultas posteriores.

```sql

/* SELECT with AS */
SELECT title AS t, creation_date AS c, status s
FROM posts;

```

* Existe una función de **SELECT** para poder contar la cantidad de registros. Esa información (un número) será el resultado del query:

```sql

/* SELECT with COUNT(*) */
SELECT COUNT(*) AS total_posts
FROM posts;
/* El resultado será una columna llamada 'total_posts' con la suma total de registros de esa tabla */

```
