# Sesión 4 - Entidades de Platzi Blog

* Nuestro proyecto será un manejador de Blogpost. Es un contexto familiar y nos representará retos muy interesantes.

* Primer paso: Identificar las entidades:

  * Posts
  * Users
  * Categories
  * Comments

* Segundo paso: Pensar en los atributos:

  * Posts
    * Post_Id (Foreign Key)
    * Title (String)
    * Creation_Date (Date)
    * Content (String)
    * Status (Boolean)
    * Tags (String)
  * Users (Entidad Fuerte)
    * User_Id (Foreign Key)
    * Password (String)
    * NickName (String)
    * Email (String)
  * Categories
    * Category_Id (Foreign Key)
    * Category_Name (String)
    * Creation_Date (Date)
  * Comments
    * Comment_Id (Foreign Key)
    * Post_Id (Key)
    * User_Id (Key)
    * Creation_Date (Date)
    * Content (String)
    * Likes (Int)
    * MasterComment (Boolean)
