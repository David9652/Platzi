from flask import Flask

app = Flask(__name__) # Flask nos pide el nombre de nuestro módulo como parámetro

@app.route('/') # En cuál URL se ejecutará nuestra función
def hello_world():
    return "Hola Mundo!!!"


if __name__ == '__main__':
    app.run()