# Sesión 15 - Manejo de strings en Python

* Un string es una secuencia de caracteres, donde cada caracter tiene un indice que inicia en cero, por ejemplo:

```python
my_string = 'platzi'

my_string[0] # p
my_string[1] # l
my_string[2] # a
my_string[3] # t
my_string[4] # z
my_string[5] # i
```

* Para conocer la longitud de un string podemos usar la funcion **len**

```python
len(my_string) # 6
```

* Los **strings** tienen algunos métodos útiles cómo:

```python
my_string.upper() # retorna el string en máyusculas
my_string.lower() # retorna el string en minúscula
my_string.find('F') # retorna el índice donde se encuentra
```

* [Métodos de los Strings en Python](https://docs.python.org/3.6/library/stdtypes.html#string-methods "Métodos de los Strings en Python")