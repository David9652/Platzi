# Sesión 42 - Comandos y recursos colaborativos en Git y GitHub

* En **Git** puedes utilizar los siguientes comandos para obtener estadísticas de un repositorio:

``` bash
# Muestra cuántos commits han hecho cada uno de los miembros del equipo
git shortlog -sn

# Muestra cuántos commits han hecho cada uno de los miembros del equipo, contando hasta los que se han eliminado
git shortlog -sn --all

# Muestra cuántos commits han hecho cada uno de los miembros del equipo, contando hasta los que se han eliminado a excepción por los merges
git shortlog -sn --all --no-merge

# Muestra quién hizo qué en un archivo del repositorio
git blame file_name

# Muestra quién hizo qué en un archivo del repositorio desde una línea inicial hasta una línea final
git blame file_name -Llinea_inicial,linea_final

# Muestra las ramas remotas
git branch -r

# Muestra las ramas locales y remotas
git branch -a
```

* En **GitHub** esta información se encuentra en la tab de **Insights**.
