
for(var i=0; i<10; i++){
    document.write(randomNumber(-5,5)+" , ");
}

function randomNumber(min,max){
    var resultado = Math.floor((Math.random()*(max-min+1))+min) 
    return resultado;
}