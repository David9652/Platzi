# Sesión 25 - Qué es una búsqueda binaria

* Los algoritmos son una serie de instrucciones que nos llevan a un resultado, por ejemplo que tal si queremos saber si un número se encuentra en una lista.

* Una forma es buscar un ítem tras otro, pero sí la lista es muy larga esta forma no es la mas eficiente, una forma mas eficiente de solucionar éste problema es usar una **búsqueda binaria**.

* Con el algoritmo de **búsqueda binaria** partimos de la lista ordenada, nosotros sabemos que hay números mayores y menores que el numero que estamos buscando.

* Seleccionamos un numero aleatorio para dividir la lista, puedes escoger cualquier número, en éste caso sumamos el primer y el último indice de la lista, los sumamos y dividimos en dos (por eso se llama binario), luego comparamos el número que esta en el indice, de esta manera ya eliminamos la mitad de las opciones. Podemos continuar dividiendo la lista y comparando hasta que lleguemos al resultado esperado.