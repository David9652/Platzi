class Lamp:
    _LAMPS = ['''
          .
     .    |    ,
      \   '   /
       ` ,-. '
    --- (   ) ---
         \ /
        _|=|_
       |_____|
    ''',
    '''
         ,-.
        (   )
         \ /
        _|=|_
       |_____|
    ''']

    def __init__(self, is_turned_on):
        self.__is_turned_on = is_turned_on

    def turn_on(self):
        self.__is_turned_on = True
        self.__display_image()

    def turn_off(self):
        self.__is_turned_on = False
        self.__display_image()

    def __display_image(self):
        if self.__is_turned_on:
            print(self._LAMPS[0])
        else:
            print(self._LAMPS[1])