# Sesión 14 - Logs

* Las expresiones regulares son muy útiles para encontrar líneas específicas que nos dicen algo muy puntual dentro de los archivos de logs que pueden llegar a tener millones de líneas.

* **Ejemplo**

```
[LOG ENTRY] [ERROR] The system is unstable
[LOG ENTRY] [WARN] The system may be down
[LOG ENTRY] [LOG] Everything is OK
[LOG ENTRY] [LOG] [user:@beco] Logged in
[LOG ENTRY] [LOG] [user:@beco] Clicked here
[LOG ENTRY] [LOG] [user:@beco] Rated the app
[LOG ENTRY] [LOG] [user:@beco] Logged out
```

* **Encontrar Warnings **&rarr; `^\[LOG.*\[WARN].*`

* **Encontrar Errores** &rarr; `^\[LOG.*\[ERROR].*`

* **Encontrar Logs de un usuario específico** &rarr; `^\[LOG.*LOG.*beco.*$`

* Página para utilizar logs &rarr; https://pastebin.com/ptDsJ6tR