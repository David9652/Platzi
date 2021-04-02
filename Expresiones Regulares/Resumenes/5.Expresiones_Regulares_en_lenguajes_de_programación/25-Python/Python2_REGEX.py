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