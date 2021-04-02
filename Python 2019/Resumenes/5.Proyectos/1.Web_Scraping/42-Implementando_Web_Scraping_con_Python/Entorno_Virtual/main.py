import requests
from urllib.request import urlretrieve
from bs4 import BeautifulSoup

def run():
    for i in range(1,5):
        # Realizar petición y guardar respuesta 
        response = requests.get(url='https://xkcd.com/{}'.format(i))
        print(f"Respuesta obtenida, comenzando el parseo {i}")
        # Parsear y Embellecer Respuesta en HTML
        soup = BeautifulSoup(markup=response.content,features="html.parser")
        print(type(soup))
        print(f"Parseo finalizado {i}")
        # Buscar el div que contiene las imágenes objetivo
        image_container = soup.find(id='comic')
        print(type(image_container))
        # Tomar URL de la imágen
        image_url = image_container.find('img')['src']
        print(type(image_url))
        print(image_url)
        # Tomar el nombre de la imágen ára ser utilizada como el nombre del archivo
        image_name = image_url.split("/")[-1]
        print(image_name)
        print('Descargando la imagen {}'.format(image_name))
        # Realizar petición a la imagen encontrada y guardar el archivo
        urlretrieve('https:{}'.format(image_url), image_name)

if __name__ == '__main__':
    run()