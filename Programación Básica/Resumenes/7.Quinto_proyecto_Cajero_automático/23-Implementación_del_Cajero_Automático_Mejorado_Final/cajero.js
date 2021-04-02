/***************** COLECCIÓN BILLETES *****************/
var cajero = [];
cajero.push(new Billete(50000,3,"billete50.png"));
cajero.push(new Billete(20000,2,"billete20.png"));
cajero.push(new Billete(10000,2,"billete10.png"));
var cajeroCopia = []; // Arreglo con la copia de la cantidad de los billetes
/***************** COLECCIÓN BILLETES *****************/
/***************** VARIABLES PRINCIPALES *****************/
var entradaUsuario = document.getElementById("money"); 
var botonExtraer = document.getElementById("extraer"); 
var resultado = document.getElementById("resultado");
var dineroUsuario = 0;
var cantidadBilletes = 0;
var totalBilletes = [];
/***************** VARIABLES PRINCIPALES *****************/
/*****************  VERIFICACIÓN SI ES DINERO *****************/
botonExtraer.addEventListener("click",function(){
    dineroUsuario = parseInt(entradaUsuario.value);
    if(isNaN(dineroUsuario)){
        alert("Intento de robo");
    }
    else{
        contarDinero(dineroUsuario);
    }
})
/***************** VERIFICACIÓN SI ES DINERO *****************/
/***************** DETERMINANDO CANTIDAD BILLETES *****************/
function contarDinero(money){
    cajeroCopia = clonar(cajero);
    for (const iterator of cajero) {
        if (money > 0){
            cantidadBilletes = parseInt(money / iterator.valor);
            if(cantidadBilletes > iterator.cantidad){
                cantidadBilletes = iterator.cantidad;
            }
            if (cantidadBilletes != 0){
                totalBilletes.push(new Billete(iterator.valor,cantidadBilletes,iterator.source));
            }
            iterator.cantidad = iterator.cantidad - cantidadBilletes; // Modificando cantidad original de biletes del cajero
            money = money - (iterator.valor * cantidadBilletes);
        }
    }
    if (money == 0){
        imprimirResultado();
    }
    else{
        original(cajero, cajeroCopia);
        resultado.innerHTML += "No fue posible realizar el proceso <br> <hr/>";
    }
    totalBilletes =[]; // Reinicializando el arreglo para que empiece vacío
}
/***************** DETERMINANDO CANTIDAD BILLETES *****************/
/***************** IMPRESIÓN RESULTADO *****************/
function imprimirResultado (){
    for (const iterator of totalBilletes) {
        resultado.innerHTML += "<img src=" + iterator.source + ">";   
        if(iterator.cantidad > 1){
            for (let index = 1; index < iterator.cantidad; index++) {
             resultado.innerHTML += "<img src=" + iterator.source + ">";   
            }
        }
    }
    resultado.innerHTML += "<hr/>";   
}
/***************** IMPRESIÓN RESULTADO *****************/
/***************** CLONAR ESTADO ACTUAL DEL CAJERO EN LA COPIA *****************/
function clonar (original){
    var copia = [];
    for (const iterator of original) {
        copia.push(iterator.cantidad);
    }
    return copia;
}
/***************** CLONAR ESTADO ACTUAL DEL CAJERO EN LA COPIA *****************/
/***************** DEJAR EL CAJERO COMO ESTABA YA QUE LA OPERACIÓN NO FUE EXITOSA *****************/
function original (original, copia){
    for (const key in original) {
        original[key].cantidad = copia [key];
    }
}
/***************** DEJAR EL CAJERO COMO ESTABA YA QUE LA OPERACIÓN NO FUE EXITOSA *****************/