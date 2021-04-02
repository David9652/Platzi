def debug(f):
    print("Hola1")
    def new_function(a, b):
        print("Function add() called!, Hola3")
        return f(a, b)
    print("Hola2")
    return new_function
@debug
def add(a, b):
    print("Hola4")
    return a + b
print(add(7, 5))

# Python program to illustrate  **kargs for  
# variable number of keyword arguments with 
# one extra argument. 
  
def myFun(arg1, **kwargs):  
    for key, value in kwargs.items(): 
        print(kwargs.items())
        print ("%s == %s" %(key, value)) 
  
# Driver code 
myFun("Hi", first ='Geeks', mid ='for', last='Geeks')   

import pdb
def div(a, b):
    """Return a / b."""
    pdb.set_trace()
    return a / b
print(div(5, 0))