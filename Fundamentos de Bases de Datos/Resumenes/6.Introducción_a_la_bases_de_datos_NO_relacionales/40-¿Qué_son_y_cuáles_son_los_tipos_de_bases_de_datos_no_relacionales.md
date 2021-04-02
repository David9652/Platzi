# Sesión 40 - ¿Qué son y cuáles son los tipos de bases de datos no relacionales?

* Respecto a las bases de datos no relacionales, no existe un solo tipo aunque se engloben en una sola categoría.

## Tipos de bases de datos no relacionales

* **Clave - valor** &rarr; Son ideales para almacenar y extraer datos con una clave única. Manejan los diccionarios de manera excepcional. Ejemplos: DynamoDB, Cassandra.

* **Basadas en documentos** &rarr; Son una implementación de clave valor que varía en la forma semiestructurada en que se trata la información. Ideal para almacenar datos JSON y XML. Guardan la forma actual de una aplicación (Videojuegos), no son buenas para hacer consulta complejas. Ejemplos: MongoDB, Firestore.

* **Basadas en grafo** &rarr;: Basadas en teoría de grafos, sirven para entidades que se encuentran interconectadas por múltiples relaciones. Ideales para almacenar relaciones complejas (Redes Neuronales). Ejemplos: neo4j, TITAN.

* **En memoria** &rarr; Pueden ser de estructura variada, pero su ventaja radica en la velocidad, ya que al vivir en memoria la extracción de datos es casi inmediata. Ejemplos: Memcached, Redis.

* **Optimizadas para búsquedas** &rarr; Pueden ser de diversas estructuras, su ventaja radica en que se pueden hacer queries y búsquedas complejas de manera sencilla (Bussiness Intelligence y Machine Learning). Ejemplos: BigQuery, Elasticsearch.
