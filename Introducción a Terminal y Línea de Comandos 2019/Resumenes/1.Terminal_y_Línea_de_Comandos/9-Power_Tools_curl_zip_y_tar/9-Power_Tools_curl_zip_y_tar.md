# Sesión 9 - Power Tools: curl, zip y tar

## curl

* Emula un navegador. No es un browser como tal, hay uno para terminal pero este solo emula los requests (peticiones) y los trae. curl está basado en libcurl que es una librería con varios subcomandos, wget es solo un comando del sistema.

* **curl [url]** &rarr; `$curl https://raw.githubusercontent.com/datasets/airport-codes/master/data/airport-codes.csv > aeropuertos3.csv`

## zip

* Agrega o reemplaza las entradas de un archivo zip de la lista, que puede incluir el nombre especial para comprimir la entrada.

* **zip [nombre_resultado] [archivos_comprimir]** &rarr; `$zip todoscsv.zip *.csv`

* **unzip [opciones] [nombre_archivo]** &rarr; `$unzip -vl todoscsv.zip (Descomprime Virtualmente).`

## tar

* Es un comando similar a zip, junta varios archivos en uno solo sin comprimirlos. Después se le dicta un algoritmo de compresión, que es zip.

* **tar [algoritmo_compresión] [nombre] [archivos_comprimir]** &rarr; `$ tar cfz todoscsv.tar.gz *.csv` - `$ tar xfz todoscsv.tar.gz (descomprimir)` 

## wget 

* Permite la descarga recursiva de archivos de un servidor, curl no lo puede hacer