int LED = 10 ; 
int sensor = 2 ;
bool valor = false;

void setup()
{
  pinMode( LED, OUTPUT) ;
  pinMode( sensor , INPUT) ;
}

void loop()
{
  valor =  digitalRead(sensor) ; //leemos el estado del sensor
  if ( valor == true ) //Si está activada la salida D0
  {
    digitalWrite(LED, valor) ;            // escribimos el nuevo valor
  }
  else{
    digitalWrite(LED, valor) ;            // escribimos el nuevo valor
  }
}
