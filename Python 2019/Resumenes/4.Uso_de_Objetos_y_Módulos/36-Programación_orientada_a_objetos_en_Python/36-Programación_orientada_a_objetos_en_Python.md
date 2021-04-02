# Sesión 36 - Programación orientada a objetos en Python

* Los **objetos** nos permiten modelar objetos de la vida real, estos objetos van a tener un estado y métodos. De esta forma vamos a poder definir cada parte de nuestro código modelándolas como objetos.

## Métodos en Python

### Métodos Estáticos

* Son funciones normales pero declaradas dentro de una clase.

* Para declarar un método estático es necesario utilizar el decorador **@staticmethod**.

* Pueden ser llamados sin tener una referencia directa ni a la clase ni a la instancia.

* No pueden acceder a ningún otro atributo o llamar a ninguna otra función dentro de la clase.

* **Ejemplo** &rarr; Si se tiene una clase **Math** y se tiene un método llamado factorial (calcula el factorial de un número dado). Probablemente no se necesite tener una instancia específica para llamar al método, debido a esto se podría decidir hacer este método estático.

### Métodos de Clase

* Para declarar un método de clase es necesario utilizar el decorador **@classmethod**.

* Son usadas para interactuar con los atributos de clase ya que se le pasa **cls** (por convencion) como referencia a la clase, es como decirle al interprete de Python que eventualmente usarás el metodo sin tener una instancia de clase previamente creada, pero igualmente necesita tener una referencia a la misma clase para tener acceso a los atributos de clase

* No tienen accesos a atributos de instancia.

### Métodos de Instancia 

* Reciben la palabra self (usada por convencion) como referencia a la instancia de la clase.

* Solamente puede ser llamado si se tiene una instancia de la clase.

* Un método de instancia puede crear, obtener y cambiar los atributos de instancia y a su vez llamar otros métodos de instancia y clase.

### Getters y Setters

* El nombre del método siempre será *get* o *set* y a continuación el nombre del atributo, su modificador siempre es public ya que queremos obtener o modificar desde afuera la clase.

* Son simples métodos que usamos en las clases para mostrar (get) o modificar (set) el valor de un atributo.

* Los **Sets** y **Gets** son la forma de acceder a atributos de una clase. Generalmente, se usan con los atributos privados, ya que a los públicos se puede acceder directamente sin tener que acudir a ellos.

* Python nos ofrece los decoradores **@property** para el método getter y **@-nombre del getter-.setter** para el método setter. Además, estos métodos nos ofrecen la posibilidad de usar la sintaxis de doc notation para acceder a los atributos y la sintaxis de asignacion para modificar los atributos.

* [Tipos de Métodos en Python - Blog](https://blog.nearsoftjobs.com/tipos-de-m%C3%A9todos-en-python-cls-vs-self-d6da1e08efa8 "Tipos de Métodos en Python")

* [Tipos de Métodos en Python - StackOverflow](https://es.stackoverflow.com/questions/936/c%C3%B3mo-son-los-m%C3%A9todos-de-una-clase-python-por-defecto "Tipos de Métodos en Python")