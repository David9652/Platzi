var imagenes = [];
imagenes["Cauchin"]="vaca.png";
imagenes["Pokacho"]="pollo.png";
imagenes["Tocinauro"]="cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

for (var pokemon of coleccion) { //Itera sobre el objeto
    pokemon.mostrar();
}

for (var indice in coleccion) { //Itera sobre el índice
    console.log(coleccion[indice]);
}

for (var indice in coleccion[0]) { //Itera sobre el índice
    console.log(indice);
}

/*
for in --> Itera sobre el índice
for of --> En algunas ocasiones itera sobre el objeto

var cauchin = new Pakiman("Cauchin",100,30); // Instanciar una clase se refiere a crear un objeto
var pokacho = new Pakiman("Pokacho",80,50);
var tocinauro = new Pakiman("Tocinauro",120,40);
*/