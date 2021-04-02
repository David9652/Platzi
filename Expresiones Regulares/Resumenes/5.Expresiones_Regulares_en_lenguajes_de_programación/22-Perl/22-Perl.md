# Sesión 22 - Perl

* Teniendo en cuenta el archivo **results.csv**, realizar una expresión regular en Perl que identifique los partidos que han ganado los visitantes.

**SOLUCIÓN**

```perl
#!/usr/bin/perl

use strict;
use warnings;

my $t = time;

open(my $f, "../results.csv") or die("no hay archivo");

my $match = 0;
my $nomatch = 0;

while(<$f>) {
	chomp;
	# 2018-06-04,Italy,Netherlands,1,1,Friendly,Turin,Italy,FALSE
	if(m/^([\d]{4,4})\-.*?,(.*?),(.*?),(\d+),(\d+),.*$/){
		if($5 > $4) {
			printf("%s: %s (%d) - (%d) %s\n",
				$1, $2, $4, $5, $3
			);
		}
		$match++;
	} else {
		$nomatch++;
	}
}

close($f);

printf("Se encontraron \n - %d matches\n - %d no matches\ntardo %d segundos\n"
	, $match, $nomatch, time() - $t);
printf("VISITANTES GANADORES\n");
```

* Además, se modificó el programa para que identificara los locales que han ganado en Marzo.

```perl
#!/usr/bin/perl

use strict;
use warnings;

my $t = time;

open(my $f, "../results.csv") or die("no hay archivo");

my $match = 0;
my $nomatch = 0;
my $locales = 0;

while(<$f>) {
	chomp;
	# 2018-06-04,Italy,Netherlands,1,1,Friendly,Turin,Italy,FALSE
	if(m/^([\d]{4,4})\-03.*([\d]+),([\d]+).*$/){
        if($2 > $3){
            printf $_."\n";
            $locales++;
        }
        $match++;
	} else {
		$nomatch++;
	}
}

close($f);

printf("Se encontraron %d matches\n", $match);
printf("Se encontraron %d no matches\n", $nomatch);
printf("LOCALES GANADORES EN MARZO %d", $locales);
```