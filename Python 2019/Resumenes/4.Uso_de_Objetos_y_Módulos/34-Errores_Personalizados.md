# Sesión 34 - Errores Personalizados

## Ejemplo Try - Except
```python
countries = {
    'mexico': 122,
    'colombia': 49,
    'argentina': 43,
    'chile': 18,
    'peru': 31
}

while True:
    country = str(input('Escribe el nombre de un país: ')).lower()

    try:
        print(f'La población de {country} es: {countries[country]} millones')
    except KeyError:
        print(f'No tenemos el dato de la población de {country}')
```