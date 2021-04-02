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