# Sesión 20 - Objetos, método constructor y su sintaxis en código

* Los **objetos** nos ayudan a crear la instancia de una clase, el objeto es el resultado de lo que modelamos, de los parámetros declarados y usaremos los objetos para que nuestras clases cobren vida.

* Instanciando una clase en 4 lenguajes de programación diferentes.

```java
Person person = new Person("David");
```
```python
person = Person("David")
```
```php
<?php
$person = new Person("David");
?>
```
```javascript
var person = new Person("David")
```

* Los **métodos** constructores dan un estado inicial al objeto y podemos añadirle algunos datos al objeto mediante estos métodos. Los atributos o elementos que pasemos a través del constructor serán los datos mínimos que necesita el objeto para que pueda vivir.

* Declarando métodos constructores en 4 lenguajes de programación diferentes.

```java
public Person (String name){
	this.name = name;
}
```
```python
def __init__(self,name):
	self.name = name
```
```php
<?php
public function __construct($name){
	$this->name = name;
}
?>
```
```javascript
function Person(name){
	this.name = name
}
```