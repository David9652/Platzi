# Sesión 40 - Entorno virtual en Python

* En Python, la comunidad comparte su código usando [PyPi (python package index)](https://pypi.org/ "PyPi (python package index)"), es un repositorio para instalar módulos de la comunidad.

* Con `$ pip install [nombre]` se puede instalar el paquete que deseas.

* **pip** ya viene instalado en versiones de python mayores a 2.7.9 o 3.4, lo único que se tendría que hacer es actualizarlo por medio del comando, `python -m pip install --upgrade pip`

* Podemos utilizar **requirements.txt** para ordenar los paquetes que necesitemos instalar en el proyecto.

* [Visual Studio Code - Python - Ambiente Virtual - Error al importar](https://stackoverflow.com/questions/53939751/pylint-unresolved-import-error-in-visual-studio-code "Visual Studio Code - Python - Ambiente Virtual - Error al importar")

* [Visual Studio Code - Python - Ambiente Virtual - Múltiples Paths](https://stackoverflow.com/questions/41471578/visual-studio-code-how-to-add-multiple-paths-to-python-path "Visual Studio Code - Python - Ambiente Virtual - Múltiples Paths")

## Ambiente virtual

* Nos permite encapsular un proyecto para poder instalar las versiones de los paquetes que se requieran sin tenerlos que instalar en todo el sistema operativo.

### Crear un entorno virtual

* Primero, se debe instalar el paquete **virtualenv**, `$ pip install virtualenv`.

* Dentro de la carpeta del proyecto, se ejecuta `$ virtualenv venv` para crear un ambiente virtual llamado **venv**.

* Si queremos decirle a nuestro entorno virtual cuál versión de python utilzar, podemos escribir el comando`$ virtualenv -p python3 venv`.

* `$source venv/bin/activate or deactivate` &rarr; Activar o Desactivar Ambiente Virtual en Unix.

* `$ source ./venv/Scripts/activate.bat or deactivate.bat` &rarr; Activar o Desactivar Ambiente Virtual en Windows.

* `$ pip freeze` &rarr; Lista las extensiones instaladas en nuestro sistema o entorno virtual activo.

* `$ pip install -r requirements.txt` &rarr; Instala todos los requerimientos que estan en el archivo requirements.txt.

* `$ pip freeze > requirements.txt` &rarr; Crea automáticamente el archivo requirements.txt con todas las dependencias que estamos utilizando en nuestro entorno virtual.

## Flask

* Flask es un framework minimalista escrito en Python que permite crear aplicaciones web rápidamente y con un mínimo número de líneas de código.

### Servidor en Flask

```python
from flask import Flask

app = Flask(__name__) # Flask nos pide el nombre de nuestro módulo como parámetro

@app.route('/') # En cuál URL se ejecutará nuestra función
def hello_world():
    return "Hola Mundo!!!"

if __name__ == '__main__':
    app.run()
```
