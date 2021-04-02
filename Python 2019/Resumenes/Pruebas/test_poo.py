from pprint import pprint

class Person:
    name = ""
    age = 0

    def __init__(self, personName, personAge):
        self.name = personName
        self.age = personAge
    
    def estornudar(self):
        return "Achuuuuuu " + self.name


    @staticmethod
    def map_string(MyList):
        MyList = map(str,MyList)
        return MyList

   # def __repr__(self):
   #     return {'name':self.name, 'age':self.age}

p = Person('Pankaj', 34)
p2 = Person('Carlos', 40)
print(type(p))
print(p2.estornudar())
print(p.estornudar())
print(list(p.map_string([1,2,3,4])))
pprint(vars(p))
pprint(vars(p2))

print(type(p))
print(dir(p))
L=[1,2,3,4]
A = 5
B = 6
len(L)
# https://docs.hektorprofe.net/python/programacion-de-funciones/paso-por-valor-y-referencia/