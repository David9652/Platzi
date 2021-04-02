/***************** COLECCIÓN BILLETES *****************/
var cajero = [];
cajero.push(new Billete(100000,3));
cajero.push(new Billete(50000,3));
cajero.push(new Billete(20000,2));
cajero.push(new Billete(10000,2));
cajero.push(new Billete(5000,5));
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
    for (const iterator of cajero) {
        if (money > 0){
            cantidadBilletes = parseInt(money / iterator.valor);
            if(cantidadBilletes > iterator.cantidad){
                cantidadBilletes = iterator.cantidad;
            }
            if (cantidadBilletes != 0){
                totalBilletes.push(new Billete(iterator.valor,cantidadBilletes));
            }
            money = money - (iterator.valor * cantidadBilletes);
        }
    }
    if (money == 0){
        imprimirResultado();
    }
    else{
        resultado.innerHTML = "No fue posible realizar el proceso";
    }
}
/***************** DETERMINANDO CANTIDAD BILLETES *****************/
/***************** IMPRESIÓN RESULTADO *****************/
function imprimirResultado (){
    for (const iterator of totalBilletes) {
        resultado.innerHTML += "Billetes de " + iterator.valor + ": " + iterator.cantidad + "<br>";   
    }
    totalBilletes =[]; // Reinicializando el arreglo para que empiece vacío
}
/***************** IMPRESIÓN RESULTADO *****************/