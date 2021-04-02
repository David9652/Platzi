# Sesión 28 - Estructura básica de un Query

* Los queries son la forma en la que estructuramos las preguntas que se harán a la base de datos. Transforma preguntas en sintaxis.

* El query tiene básicamente 2 partes: **SELECT** y **FROM** y puede aparecer una tercera como **WHERE**.

* La estrellita o asterisco (*) quiere decir que vamos a seleccionar todo sin filtrar campo.

## Ejemplo SELECT, FROM and WHERE

```sql

/* SELECT & FROM */
SELECT *
FROM platziblog_final.posts;

/* SELECT, FROM & WHERE */
SELECT *
FROM platziblog_final.posts
WHERE creation_date >'2024-00-00 00:00:00';

```
