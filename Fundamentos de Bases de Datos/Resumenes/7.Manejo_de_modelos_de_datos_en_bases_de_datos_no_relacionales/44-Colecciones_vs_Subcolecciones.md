# Sesión 44 - Colecciones vs Subcolecciones

* La particularidad de las **Top Level Collections** es que existen en el primer nivel de manera intrínseca. Las **Subcolecciones** ya no vivirán al inicio de la base de datos.

* Si tienes una entidad separada que vas a referenciar desde muchos lugares es recomendado usar una **Top Level Collection**. Por otro lado, si se necesita hacer algo intrínseco al documento es aconsejable usar **Subcolecciones**.

* Una **Top Level Collection** se utilizaría para relaciones de tipo **agregación**. Mientras que una **Subcollection** se utilizaría para relaciones tipo **composición**. Por ejemplo, tenemos Estudiantes, Cursos y Notas. Los estudiantes tiene cursos y los cursos tienen estudiantes. Si se elimina un curso, los estudiantes no deben ser eliminados. Lo mismo debería pasar si se elimina un estudiante, los cursos no deben ser eliminados. Esto es una relacion de **agregación**. Aqui se usaria **Top Level Collection** para estudiantes y cursos. Por otro lado, los Estudiantes tienen Notas y las Notas pertenecen a un Estudiante. Si se elimina un estudiante, tiene sentido eliminar las notas. Esto es una relacion de **composición**. Aquí se usarían las **Subcollections**. El estudiante tendría una **subcollection** de notas.
