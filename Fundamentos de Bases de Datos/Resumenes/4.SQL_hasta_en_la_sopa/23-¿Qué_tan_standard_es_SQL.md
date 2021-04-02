# Sesión 23 ¿Qué tan standard es SQL?

* La utilidad más grande de SQL fue unificar la forma en la que pensamos y hacemos preguntas a un repositorio de datos. Ahora que nacen nuevas bases de datos, siguen tomando elementos de SQL.

## Ejemplo SQL

```sql
CREATE TABLE people (
    person_id INT,
    last_name VARCHAR(255),
    first_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255)
);

INSERT INTO people (last_name,first_name,address, city)
VALUES('Hernandez','Laura','Calle 21','Monterrey');

SELECT last_name,first_name FROM people

DROP TABLE people

```
