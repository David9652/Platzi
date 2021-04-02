def cypher(message):
    cypher_message = ' '.join(format(ord(letter), 'b') for letter in message)  
    #cypher_message = ' '.join(map(bin,bytearray(message,encoding='utf-8')))
    return cypher_message  

def decipher(message):
    words = message.split(' ')
    decipher_message = [chr(int(word,2)) for word in words]
    return ''.join(decipher_message)

def run():

    while True:
        command = str(input('''--- * --- * --- * --- * --- * --- * --- * ---

            Bienvenido a criptografía. ¿Qué deseas hacer?

            [c]ifrar mensaje
            [d]ecifrar mensaje
            [s]alir
        '''))

        if command == 'c':
            message = str(input('Escribe tu mensaje: '))
            cypher_message = cypher(message)
            print(cypher_message)

        elif command == 'd':
            message = str(input('Escribe tu mensaje cifrado para descifrarlo: '))
            decypher_message = decipher(message)
            print(decypher_message)

        elif command == 's':
            print('salir')
            break
        else:
            print('¡Comando no encontrado!')

if __name__ == '__main__':
    print('M E N S A J E S  C I F R A D O S')
    run()