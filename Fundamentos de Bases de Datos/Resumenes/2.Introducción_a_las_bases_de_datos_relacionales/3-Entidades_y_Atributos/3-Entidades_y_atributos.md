# Sesión 3 - Entidades y atributos

* Una entidad es algo similar a un objeto (programación orientada a objetos) y representa algo en el mundo real, incluso algo abstracto. Tienen atributos que son las cosas que los hacen ser una entidad y por convención se ponen en plural (grupos de objetos).

* **Atributos Compuestos** &rarr; Son aquellos atributos que tienen atributos dentro de ellos mismos.

* **Atributos Llave** &rarr; Son aquellos que identifican a la entidad y no pueden ser repetidos. Existen dos tipos de atributos llave:

  * **Naturales** &rarr; Son inherentes al objeto como el número de serie.
  * **Clave artificial** &rarr; No es inherente al objeto y se asigna de manera arbitraria.

* **Entidades débiles** &rarr; No pueden existir sin una entidad fuerte y se representan con un cuadrado con doble línea. Existen dos razones por las que una entidad puede considerarse débil.

  * **Por identidad** &rarr; Usan la misma clave que su entidad fuerte, es decir, son dependendientes.

  * **Por existencia** &rarr; Se les asigna una clave propia. A pesar de que no dependan de la llave de su entidad fuerte, conceptualmente no pueden existir sin que haya una entidad fuerte.

**NOTA** &rarr; La nomenclatura que se utilizó para representar las entidades en esta clase, fue la [Notación Chen](https://de.wikipedia.org/wiki/Chen-Notation "Notación Chen").
