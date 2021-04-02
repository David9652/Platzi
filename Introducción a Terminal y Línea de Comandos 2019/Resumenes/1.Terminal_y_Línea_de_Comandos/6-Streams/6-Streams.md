# Sesión 6 - Streams

* Los streams son una forma de enviar datos a un comando y recibir un output de salida, error o ambos.

	* **STDIN (Standard Input)** &rarr; Parámetro de entrada.
	* **STDOUT (Standard Output)** &rarr; Es la salida por defecto.
	* **STDERR (Standard Error)** &rarr; Es la salida en caso de que suceda un error.

```php
<?php 
// Cuáles números son y no son múltiplos del número que se ingresa.
echo "número: ";
$d = trim(fread(STDIN, 100));
$i = 0;

while(true) {
    if(++$i % $d == 0) {
        fwrite(STDOUT, sprintf("El %d es múltiplo de %d.\n", $i, $d));
    } else {
        fwrite(STDERR,
            sprintf("Error, El %d NO es múltiplo de %d \n", $i, $d));
    }
    sleep(1);
}
?>
```

* Se guarda la salida en un archivo salida y el error en un archivo error

	`$php numeros.php 1> salida 2>error`

* Si se usa **>>** en vez de **>,** entonces el archivo se concatena en vez de sobreescribirse.

	`$php numeros.php 1>> salida 2>>error`

* Guardar la salida y los errores en un mismo archivo.

	`$php numeros.php > all.log 2>&1`


* Mandar instrucciones desde un archivo hacia un comando, utilizando **<**.

	`$mysql -u root -p < crear_base_de_datos.sql`


* **Ctrl + r** &rarr; Buscar comandos usados anteriormente.

* **Ctrl + k** &rarr; Limpia la terminal.

* **Ctrl + l** &rarr; Borra de la terminal la salida del último comando ejecutado.

* **tail -f std_out** &rarr; Ver en tiempo real la salida del archivo.