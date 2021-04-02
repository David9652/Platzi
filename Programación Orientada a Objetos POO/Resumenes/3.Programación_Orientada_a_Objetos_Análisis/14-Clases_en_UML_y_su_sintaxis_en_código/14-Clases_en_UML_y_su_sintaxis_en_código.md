# Sesión 14 - Clases en UML y su sintaxis en código

* Definición de la Clase Persona con atributo nombre y método caminar en 4 lenguajes de programación diferentes.

```java
class Person{
    String name = "";
    void walk(){}
}
```
```python
class Person:
    name = ""
    def walk(self):
        pass
```
```php
<?php
class Person{
    function __construct($name)
    {
        $this->name;
    }
    function walk(){}
}
?>
```
```javascript
function Persona (nombre){
    this.name = nombre;
};

Persona.prototype.walk = function () {
    console.log(`me llamo ${this.name} y estoy caminando}`);
}
```

**NOTA** &rarr; [Prototipos en JavaScript](https://sites.google.com/site/programacionhm/conceptos/object-based-languages/prototipos-en-javascript "Prototipos en JavaScript")