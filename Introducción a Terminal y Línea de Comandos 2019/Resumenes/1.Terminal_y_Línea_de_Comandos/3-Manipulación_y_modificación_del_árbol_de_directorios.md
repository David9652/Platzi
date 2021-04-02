# Sesión 3 - Manipulación y Modificación del Árbol de Directorios

## mkdir (Make Directory)

* Crear un directorio.

* **mkdir [nombre_directorio]** &rarr; `$mkdir sandbox`

## touch 

* Si no existe el archivo lo va a crear, y si existe le cambia la fecha de modificación.

* **touch [nombre_archivo]** &rarr; `$touch test.txt`

## mv (move)

* Mueve o renombra archivos o directorios del sistema de archivos.

* **mv [archivo] [nueva_ubicación]** &rarr; `$mv ejercicio.js ./cursos/`

* **mv [archivo] [nuevo_nombre_archivo]** &rarr; `$mv trabajo1.txt final.txt`

## rm (remove)

* Elimina archivos, links o directorios.

* **rm [nombre_archivo]** &rarr; `$rm ejemplo.php `

* **rm -rf [nombre_directorio]** &rarr; `$rm -rf clases/`

## man (manual)

* Es el manual de la terminal, sirve para buscar información sobre un comando y sus banderas. Con espacio pasas una página, - con b te regresas una página y con q sales del manual.

* **man [comando]** &rarr; `$man rm`

## cp (copy)

* Copia un archivo a otros directorios.

* **cp [nombre_archivo] [destino]** &rarr; `$cp hola.txt /home/user/Downloads`

## pushd (Push Directory) - popd (Pop Directory)

* Navegar entre dos directorios fácilmente.

* **pushd [ruta_directorio]** &rarr; `$pushd /home/user/Downloads`
* **popd** &rarr; Regresa al directorio donde estaba. `$popd`