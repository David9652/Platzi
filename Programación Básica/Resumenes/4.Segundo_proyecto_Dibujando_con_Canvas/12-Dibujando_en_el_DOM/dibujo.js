var d = document.getElementById("dibujito"); // Etiqueta Canvas
var lienzo = d.getContext("2d");
console.log(lienzo);
lienzo.beginPath(); // Comienza el dibujo
lienzo.strokeStyle = "red"; // Escoger el color de la línea
lienzo.moveTo(100,100); // Dónde va a iniciar mi trazo
lienzo.lineTo(200,200) // Dónde va a terminar mi trazo
lienzo.stroke(); // Realizar el trazo
lienzo.closePath(); // Acaba el dibujo