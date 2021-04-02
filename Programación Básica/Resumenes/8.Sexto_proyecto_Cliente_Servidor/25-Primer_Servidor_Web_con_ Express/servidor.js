var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', function (req, res) {
    res.send('Hello Mundo')
  })
 
app.listen(8989);

/*
    Instalemos NodeJS y los paquetes que necesitamos para programar nuestro arduino

    Con esto instalado podemos crear nuestro primer servidor web.

    Recuerda:

    Si no has usado una línea de comando en Platzi tenemos un curso para que aprendas.
    NodeJS es un runtime para poder correr JavaScript sin un navegador.
    Debes tener permisos de administrador para poder instalar NodeJS en tu computador.

    https://platzi.com/programacion-basica/tutoriales/como-agregar-html-a-tu-servidor-web-con-express/
*/