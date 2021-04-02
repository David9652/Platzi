# Sesión 28 - Javascript

* Teniendo en cuenta el archivo results.csv, realizar un programa en Javascript que identifique si un correo es válido o no.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex en JS</title>
    <script>
        function validate (str){
            if(str.match(/^\w{5,10}@[\w\.]{2,10}\.\w{4,5}$/)){
                document.getElementById("boton").disabled = false;
                document.getElementById("email").style.backgroundColor = "red";
                console.log(str)
            }
            else{
                document.getElementById("email").style.backgroundColor = "blue";
            }
        }
    </script>
</head>
<body>
    <input type="text" name="email" id="email" onkeyup="validate(this.value)">
    <input type="button" value="enviar" id="boton" disabled>
</body>
</html>
```

* [Expresiones Regulares JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions "Expresiones Regulares JavaScript")
