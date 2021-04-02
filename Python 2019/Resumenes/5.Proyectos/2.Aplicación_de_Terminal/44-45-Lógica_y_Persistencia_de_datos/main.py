import csv
from contactbook import ContactBook

def run():

    contact_book = ContactBook()

    with open('contacts.csv', 'r', newline='') as f:
        reader = csv.reader(f)
        for idx, row in enumerate(reader):
            if idx==0 or row ==[]:
                continue
            else:
                print(row)
                contact_book.add(row[0],row[1],row[2])

    while True:
        command = str(input('''
            ¿Qué deseas hacer?

            [a]ñadir contacto
            [ac]tualizar contacto
            [b]uscar contacto
            [e]liminar contacto
            [l]istar contactos
            [s]alir
        '''))

        if command == 'a':
            print('añadir contacto')

            name = str(input('Escribe el nombre del contacto: '))
            phone = str(input('Escribe el teléfono del contacto: '))
            email = str(input('Escribe el email del contacto: '))

            contact_book.add(name, phone, email)

        elif command == 'ac':
            print('actualizar contacto')

            name = str(input('Escribe el nombre del contacto: '))
            phone = str(input('Escribe el teléfono del contacto: '))
            email = str(input('Escribe el email del contacto: '))

            contact_book.update(name, phone, email)

        elif command == 'b':
            print('buscar contacto')

            email = str(input('Escribe el correo del contacto: '))

            contact_book.search(email)

        elif command == 'e':
            print('eliminar contacto')

            email = str(input('Escribe el correo del contacto: '))

            contact_book.delete(email)

        elif command == 'l':
            print('listar contactos')

            contact_book.show_all()

        elif command == 's':
            break
        else:
            print('Comando no encontrado.')


if __name__ == '__main__':
    run()