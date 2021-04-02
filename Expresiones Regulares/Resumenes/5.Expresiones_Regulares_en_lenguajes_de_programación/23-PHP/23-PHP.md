# Sesión 23 - PHP

* Teniendo en cuenta el archivo **results.csv**, realizar una expresión regular en PHP que identifique los días de los partidos de Enero del 2018.

**SOLUCIÓN**

```php
<?php
$file = fopen("../results.csv","r");

$match   = 0;
$nomatch = 0;

while(!feof($file)) {
    $line = fgets($file);
    if(preg_match(
        '/^2018\-01\-(\d\d),.*$/',
        $line,
        $m
      )
    ) {
        print_r($m);
        $match++;
    } else {
        $nomatch++;
    }
}
fclose($file);

printf("\n\nmatch: %d\nnomatch: %d\n", $match, $nomatch);
?>
```