# Sesión 9 - El caso de (?) como delimitador

* El **?** indica al patrón que encuentre las coincidencias de manera rápida (o lazy); es decir, devolviendo el resultado más pequeño que haga match hasta donde se encuentra el delimitador, y esto lo haga tantas veces como sea posible dentro de la cadena.

* **Ejemplo**

	* **csv1,csv2,csv3,csv4,csv5**
	* **1234,543,345,678,987**
	* **123,321,123,321,123**

`.+?,` &rarr; Busca 1 o más caracteres que terminen en coma, devolviendo el resultado más pequeño que haga match hasta donde se encuentre el delimitador.