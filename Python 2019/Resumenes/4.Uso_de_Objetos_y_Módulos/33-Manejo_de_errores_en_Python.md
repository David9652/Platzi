# Sesión 33 - Manejo de errores en Python

* Cuando el programa no sabe como hacer algo o se traba en un proceso va a arrojar un error.

* Es importante poder manejar estos errores. En Python podemos capturar esos errores con try y except.

* [Manejo de Errores](https://sodocumentation.net/es/python/topic/1788/excepciones "Manejo de Errores")

* [Jerarquía de Errores](https://docs.python.org/3/library/exceptions.html#exception-hierarchy "Jerarquía de Errores")

## Ejemplo Python

```python
try:
	# Código a ejecutar
except:
	# Código para 'cachar' o 'recibir' el error y hacer algo
else:
	# Código cuando el try SÍ sirva y NO se ejecute el except
finally:	
	# Código que SIEMPRE se va a ejecutar, independientemente se ejecute el except o el else
```