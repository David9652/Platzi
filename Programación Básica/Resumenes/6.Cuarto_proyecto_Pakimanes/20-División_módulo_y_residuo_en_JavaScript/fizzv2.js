var numeros = 100;

for (var i = 1; i <= numeros; i++) {

    if(isDivisible(i,3) && isDivisible(i,5)){
        document.write("fizzbuzz");
    }
    else if(isDivisible(i,3)){
        document.write("fizz");
    }
    else if (isDivisible(i,5)){
        document.write("buzz");
    }
    else{
        document.write(i);
    }
    document.write("<br>")
}

function isDivisible(num,mod){
    if(num % mod == 0){
        return true;
    }
}