var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown",dibujarTeclado);

function dibujarTeclado(e){

    switch(e.keyCode){

        case teclas.UP:
            console.log("Vamo' pa arriba!");
        break;

        case teclas.DOWN:
            console.log("Vamo' pa abajo!");
        break;

        case teclas.LEFT:
            console.log("Vamo' pa la izquierda!");
        break;

        case teclas.RIGHT:
            console.log("Vamo' pa la derecha!");
        break;
        default:
            console.log("Otra Tecla");
    }

   /* if(e.keyCode==teclas.UP){
        console.log("Vamo' pa arriba!");
    }
    if(e.keyCode==teclas.DOWN){
        console.log("Vamo' pa abajo!");
    }
    if(e.keyCode==teclas.LEFT){
        console.log("Vamo' pa la izquierda!");
    }
    if(e.keyCode==teclas.RIGHT){
        console.log("Vamo' pa la derecha!");
    }*/
}