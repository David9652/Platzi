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