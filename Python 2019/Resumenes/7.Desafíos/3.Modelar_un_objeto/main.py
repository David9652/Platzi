
PS4=['''
        _=====_                               _=====_
       / _____ \                             / _____ 
     +.-'_____'-.---------------------------.-'_____'-.+
    /   |     |  '.        S O N Y        .'  |  _  |   
   / ___| /|\ |___ \                     / ___| /_\ |___ 
  / |      |      | ;  __           _   ; | _         _ | ;
  | | <---   ---> | | |__|         |_:> | ||_|       (_)| |
  | |___   |   ___| ;SELECT       START ; |___       ___| ;
  |\    | \|/ |    /  _     ___      _   \    | (X) |    /|
  | \   |_____|  .','" "', |___|  ,'" "', '.  |_____|  .' |
  |  '-.______.-' /       \ANALOG/       \  '-._____.-'   |
  |               |       |------|       |                |
  |              /\       /      \       /\               |
  |             /  '.___.'        '.___.'  \              |
  |            /                            \             |
   \          /                              \           /
    \________/                                \_________/
    '''
    ]

def run():

    while True:

        command = str(input('''--- * --- * --- * --- * --- * --- * --- * ---

            Bienvenido. ¿Qué deseas hacer?

            [w] -> Arriba
            [a] -> Izquierda
            [s] -> Abajo
            [d] -> Derecha
            [e] -> Exit
        '''))

        if command == 'w':
            print("Arriba")
        elif command == 'a':
            print("Izquierda")
        elif command == 's':
            print('Abajo')
        elif command == 'd':
            print('Derecha')
        elif command == 'e':
            print('exit')
            break
        else:
            print('¡Comando no encontrado!')

if __name__ == '__main__':
    print('P L A Y S T A T I O N')
    print(PS4)
    run()