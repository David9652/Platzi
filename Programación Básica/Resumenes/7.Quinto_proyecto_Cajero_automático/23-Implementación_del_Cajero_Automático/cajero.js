/***************** COLECCIÓN BILLETES *****************/

var cajero = [];
cajero.push(new Billete(50000,3));
cajero.push(new Billete(20000,2));
cajero.push(new Billete(10000,2));

/***************** COLECCIÓN BILLETES *****************/

/***************** VARIABLES PRINCIPALES *****************/

var entradaUsuario = document.getElementById("money"); 
var botonIngresar = document.getElementById("ingresar"); 
var dineroUsuario = 0;
var cantidadBilletes = 0;
var totalBilletes = [];
var verificacionImpresion = false;

/***************** VARIABLES PRINCIPALES *****************/

/*****************  VERIFICACIÓN SI ES DINERO *****************/

botonIngresar.addEventListener("click",function(){
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
    for (const iterator of cajero) {
        cantidadBilletes = parseInt(money / iterator.valor);

        if(cantidadBilletes > iterator.cantidad){
            cantidadBilletes = iterator.cantidad;
        }
        money = money - (iterator.valor * cantidadBilletes);
        verificacionImpresion = guardarCantidadBilletes(iterator.valor,cantidadBilletes,money);
    }
    imprimirResultado(verificacionImpresion);
}

/***************** DETERMINANDO CANTIDAD BILLETES *****************/

/***************** GUARDANDO CANTIDAD BILLETES *****************/

function guardarCantidadBilletes(valor,billetes,restante){
    totalBilletes.push(valor,billetes);
    if(restante == 0){ // Dinero Exacto
        return true;
    }
    return false;
}

/***************** GUARDANDO CANTIDAD BILLETES *****************/

/***************** IMPRESIÓN RESULTADO *****************/

function imprimirResultado (bandera){
    if (bandera){ // Imprimir Billetes
        for (var i = 1; i < totalBilletes.length; i += 2) { // Posiciones impares valor del billete - Posiciones pares cantidad del billete
            if(totalBilletes[i] != 0){
                document.write("Billetes de " + totalBilletes[i-1] + ": " + totalBilletes[i] + "<br>");
            }
        }
        totalBilletes =[]; // Reinicializando el arreglo para que empiece vacío
    }
    else{
        document.write("No fue posible realizar el proceso");
    }
}

/***************** IMPRESIÓN RESULTADO *****************/