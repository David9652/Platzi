# Sesión 46 - Construyendo Platziblog en Firestore

* **users** &rarr; Top Level Collection, pero podría ser perfectamente una Subcollection de Posts
* **posts** &rarr; Top Level Collection
* **comments** &rarr; Subcollection de Posts
* **categories** &rarr; Top Level Collection
* **tags** &rarr; Subcollection de Posts

* Utilizar **Top Level Collection** para entidades fuertes, que más adelante se usen para realizar busquedas exhaustivas.

* Utilizar **Subcollection** para entidades débiles, que solo permitan plasmar información relacionada, pero que dicha data no sea una fuente de consulta primaria para nuestra aplicación.
