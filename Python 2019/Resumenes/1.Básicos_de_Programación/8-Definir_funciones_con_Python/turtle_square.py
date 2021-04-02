import turtle

def main():
    window = turtle.Screen()
    david = turtle.Turtle()

    make_square(david)

    turtle.mainloop()

def make_square(david):
    length = int(input('Tamaño de cuadrado: '))

    for i in range(4):
        make_line_and_turn(david, length)

def make_line_and_turn(david, length):
    david.forward(length)
    david.left(90)

if __name__ == '__main__':
    main()
    # https://es.stackoverflow.com/questions/32165/qu%C3%A9-es-if-name-main