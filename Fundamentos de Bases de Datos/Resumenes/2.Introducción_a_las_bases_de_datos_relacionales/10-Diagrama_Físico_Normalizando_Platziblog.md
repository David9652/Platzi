# Sesión 10 - Diagrama Físico: Normalizando Platziblog

* Posts
    * Id - INTEGER - Primary Key
    * Title - VARCHAR (150)
    * Creation_Date - TIMESTAMP
    * Content - TEXT - Maneja tamaños muy grandes
    * Status - CHAR (8) CHECK(IN("activo","inactivo"))
    * User_Id - INTEGER - Foreign Key
    * Category_Id - INTEGER - Foreign Key

* Cardinalidad N:1 Users
* Cardinalidad 1:N Comments
* Cardinalidad N:1 Categories
* Cardinalidad N:N Tags

* Users
    * Id - INTEGER - Primary Key
    * Login - VARCHAR (30) - Not Null
    * Password - VARCHAR (32) - Not Null
    * NickName - VARCHAR (40) - Not Null
    * Email - VARCHAR (40) - Not Null & Unique

* Cardinalidad 1:N Comments
* Cardinalidad 1:N Posts

* Comments
    * Id - INTEGER - Primary Key
    * Content - TEXT
    * User_Id - INTEGER - Foreign Key
    * Post_Id - INTEGER - Foreign Key

* Cardinalidad N:1 Users
* Cardinalidad N:1 Posts

* Categories
    * Id - INTEGER - Primary Key
    * Category_Name - VARCHAR (30)

* Cardinalidad 1:N Posts

* Tag
    * Id - INTEGER - Primary Key
    * Tag_Name - VARCHAR (30)

* Cardinalidad N:N Posts

* Posts_Tags

    * Post_Tag_Id - INTEGER - Primary Key
    * Post_Id - INTEGER - Primary Key - Foreign Key
    * Tag_Id - INTEGER - Primary Key - Foreign Key

* Tabla intermedia o pivote creada para romper la cardinalidad de N:N que hay entre **Posts** y **Tags**, es necesario incluir las dos llaves primarias de cada entidad. Además, es necesario crear una llave única para la tabla, ya sea incluyendo una llave artificial o creando una llave compuesta, es decir, una llave que sea la combinación entre la llave del post y la llave de la etiqueta.

**NOTA** &rarr; Si hay una cardinalidad de 1:N, la llave foránea se debe incluir en la entidad que tenga la N. En caso de que haya una cardinalidad de 1:1, no importa en cuál de las dos entidades se incluya la llave foránea. Cuando hay una cardinalidad de N:N, se debe romper esa relación mediante una tabla intermedia o a veces llamada tabla pivote.
