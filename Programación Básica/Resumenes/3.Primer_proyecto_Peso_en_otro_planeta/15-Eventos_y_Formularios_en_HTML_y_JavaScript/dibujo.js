var d = document.getElementById("dibujito"); // Canvas Tag
var texto = document.getElementById("texto_lineas"); // Input Text
var boton = document.getElementById("botoncito"); // Input Button
var lienzo = d.getContext("2d"); // Método Canvas 
boton.addEventListener("click",dibujoClick);

function dibujarLinea(color,x_inicial,y_inicial,x_final,y_final) 
{
    lienzo.beginPath(); // Comienza el dibujo
    lienzo.strokeStyle = color; // Escoger el color de la línea
    lienzo.moveTo(x_inicial,y_inicial); // Dónde va a iniciar mi trazo
    lienzo.lineTo(x_final,y_final) // Dónde va a terminar mi trazo
    lienzo.stroke(); // Realizar el trazo
    lienzo.closePath(); // Acaba el dibujo   
}

function getColor(min, max) 
{  
    var r = randomNumber(min, max);
    var g = randomNumber(min, max);
    var b = randomNumber(min, max);
    return fullColorHex(r,g,b);
};

function randomNumber(min, max)
{
    return (Math.floor(Math.random() * (max - min)) + min); // Retorna un número entre 0 y 255
};

function rgbToHex(rgb){
    var hex = rgb.toString(16); // Número RGB a Hexadecimal
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

function fullColorHex (r, g, b)
{   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "#" + red + green + blue; 
};

function dibujoClick(){
    lienzo.clearRect(0, 0, d.width, d.height); // Limpiar Canvas. 
    var lineas = parseInt(texto.value);
    var contador = 0;
    var min = 0;
    var max = 255; 
    var trazo_original, trazo_desplazado;

    while(contador < lineas)
    {
        trazo_original = (d.width/lineas) * (contador);
        trazo_desplazado = (d.width/lineas) * (contador +1);
        dibujarLinea(getColor(min,max),0,trazo_original,trazo_desplazado,d.width); // Izquierda
        dibujarLinea(getColor(min,max),trazo_original,d.width,d.width,d.width-trazo_desplazado); // Abajo 
        dibujarLinea(getColor(min,max),d.width,d.width-trazo_original,d.width-trazo_desplazado,0); // Derecha 
        dibujarLinea(getColor(min,max),d.width-trazo_original,0,0,trazo_desplazado); // Arriba
        contador ++;
    }

    dibujarLinea(getColor(min,max),1,1,1,d.width-1);
    dibujarLinea(getColor(min,max),1,d.width-1,d.width-1,d.width-1);
    dibujarLinea(getColor(min,max),d.width-1,d.width-1,d.width-1,1);
    dibujarLinea(getColor(min,max),d.width-1,1,1,1);
}

// Ámbito de una variable: Globales y Locales

/* 
while(contador < lineas)
{
    x_in = 10 * contador;
    y_in = 10 * contador;
    x_fin = 10 * (contador +1);
    y_fin = d.width - (10 * (contador +1));
    dibujarLinea("blue",0,y_in,x_fin,d.width);
    dibujarLinea("green",x_in,d.width,d.width,y_fin);
    contador ++;
}
*/

/*
for(contador = 0; contador < lineas; contador++)
{
    x_in = 10 * contador;
    y_in = 10 * contador;
    x_fin = 10 * (contador +1);
    y_fin = d.width - (10 * (contador +1));
    dibujarLinea("blue",0,y_in,x_fin,d.width);
    dibujarLinea("green",x_in,d.width,d.width,y_fin);
}
*/

/*
var y_in = 0;
var x_fin= 10;
while(contador < lineas)
{
    dibujarLinea("blue",0,y_in,x_fin,d.width);
    y_in += 10;
    x_fin += 10;
    contador ++;
}
*/