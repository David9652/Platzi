from car import Car
from driver import Driver
from uberx import UberX
from paypal import PayPal
#https://github.com/Microsoft/vscode-python/issues/3840
if __name__ == "__main__":
    print("Hola Mundo!")
    uber = UberX("ABC123",Driver("David Ángel","1018481424"),"Chevrolet","Spark")
    uber.passenger = 4
    print(vars(uber))
    print(vars(uber.driver))
    paypal = PayPal(5,"carlosdavid_9652@hotmail.com")
    print(vars(paypal))