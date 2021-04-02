# Sesión 25 - Python

* Teniendo en cuenta el archivo **results.csv**, realizar una expresión regular en Python que identifique cuáles y cuántos han sido los partidos en los que se han anotado más de 20 goles.

* Para saber qué poner en el **shebang(#!)** se tiene que escribir en consola `$which python`

**SOLUCIÓN**

```python3
#!/c/Python37/python3
import re

#1923-06-03,Switzerland,Germany,1,2,Friendly,Basel,Switzerland,FALSE
pattern = re.compile(r'(\d{4,4})\-\d\d\-\d\d,(.*),(.*),(\d+),(\d+).*')

match = 0
f = open("../results.csv","r",encoding="utf-8")

for line in f:
    res = re.match(pattern,line)
    if res:
        total =  int(res.group(4)) + int(res.group(5))
        if total > 20:
            match += 1
            print("Goles: {}, {}, {} ({}) - ({}) {}".format(total,res.group(1), 
            res.group(2), res.group(4), res.group(5), res.group(3)))
print (match)
f.close()
```
```python
#!/c/Users/David Angel/.windows-build-tools/python27/python
import re

pattern = re.compile(r'(\d{4,4})\-\d\d\-\d\d,(.*),(.*),(\d+),(\d+).*')

match = 0
f = open("../results.csv","r")

for line in f:
    res = re.match(pattern,line)
    if res:
        total =  int(res.group(4)) + int(res.group(5))
        if total > 20:
            match += 1
            print("Goles: {}, {}, {} ({}) - ({}) {}".format(total,res.group(1), 
            res.group(2), res.group(4), res.group(5), res.group(3)))
print (match)
f.close()
```