# Sesión 35 - Manejo de archivos en Python

* Con Python también podemos leer y escribir archivos del sistema.

* Existen varios modos en los que podemos manejar archivos

    * 'r' &rarr; leer
    * 'w' &rarr; escribir
    * 'a' &rarr; añadir
    * 'r+' &rarr; leer y escribir

* Siempre recuerda cerrar el archivo.

* El keyword **with** nos permite manejar el contexto al trabajar con archivos.

## Ejemplo Escritura 
```python
def run():
    with open('numeros.txt', 'w') as f:
        for i in range(10):
            f.write(str(i))
            f.write("\n")

if __name__ == '__main__':
    run()
```
## Ejemplo Lectura
```python
def run():
    counter = 0
    with open('aleph.txt', encoding="utf-8") as f:
        # print(f.readlines()) Imprimir todas las líneas del archivo
        for line in f:
            counter += line.count('Beatriz')

    print(f'Beatriz se encuentra {counter} en el texto')

if __name__ == '__main__':
    run()
```