# Sesión 11 - Qué es un Branch (rama) y cómo funciona un Merge en Git

* **Git** es una base de datos muy precisa con todos los cambios y crecimiento que ha tenido nuestro proyecto. Los commits son la única forma de tener un registro de los cambios. Pero las **ramas** amplifican mucho más el potencial de **Git**.

* Todos los commits se aplican sobre una **rama**. Por defecto, siempre empezamos en la rama **master** (es posible cambiarle el nombre) y creamos nuevas ramas, a partir de esta, para crear flujos de trabajo independientes.

* Crear una nueva **rama** se trata de copiar un commit (de cualquier **rama**), pasarlo a otro lado (a otra **rama**) y continuar el trabajo de una parte específica de nuestro proyecto sin afectar el flujo de trabajo principal (que continúa en la **rama master** o la **rama principal**).

* Los equipos de desarrollo tienen un estándar: Todo lo que esté en la **rama master** va a producción, las nuevas features, características y experimentos van en una **rama** “development” (para unirse a master cuando estén definitivamente listas) y los issues o errores se solucionan en una **rama** “hotfix” para unirse a master tan pronto como sea posible.

* Crear una nueva **rama** se conoce como **Checkout**. Unir dos **ramas** se conoce como **Merge**.

* Se pueden crear todas las **ramas** y commits que queramos. De hecho, podemos aprovechar el registro de cambios de **Git** para crear **ramas**, traer versiones viejas del código, arreglarlas y combinarlas de nuevo para mejorar el proyecto.

* Es necesario tener en cuenta que combinar estas **ramas** (sí, hacer “merge”) puede generar conflictos. Algunos archivos pueden ser diferentes en ambas **ramas**. **Git** es muy inteligente y puede intentar unir estos cambios automáticamente, pero no siempre funciona. En algunos casos, somos nosotros los que debemos resolver estos conflictos “a mano”.

* [Flujo de trabajo en Git](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow "Flujo de trabajo en Git")
