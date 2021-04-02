var d = document.getElementById("dibujito"); // Etiqueta Canvas
var lienzo = d.getContext("2d");
console.log(lienzo);

dibujarLinea("blue",10,300,220,10);
dibujarLinea("green",10,220,300,10);

function dibujarLinea(color,x_inicial,y_inicial,x_final,y_final) 
{
    lienzo.beginPath(); // Comienza el dibujo
    lienzo.strokeStyle = color; // Escoger el color de la línea
    lienzo.moveTo(x_inicial,y_inicial); // Dónde va a iniciar mi trazo
    lienzo.lineTo(x_final,y_final) // Dónde va a terminar mi trazo
    lienzo.stroke(); // Realizar el trazo
    lienzo.closePath(); // Acaba el dibujo   
}