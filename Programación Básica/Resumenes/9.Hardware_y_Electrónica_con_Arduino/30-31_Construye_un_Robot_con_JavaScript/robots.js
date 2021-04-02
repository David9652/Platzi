var five = require("johnny-five");
var board = new five.Board();
var led, motor, fotocelda, luz, turno;

board.on("ready", function() {
  fotocelda = new five.Sensor({pin: A1, freq: 50});
  led = new five.Led(7);
  led.on();
  motor = new five.Servo(9);
  ondear()
});

function ondear(){
  luz = fotocelda.value;
  if(luz > 800){
    if(turno){
      turno = 0;
      motor.to(30);
    }
    else{
      turno = 1;
      motor.to(45);
    }
  }
  else{
    motor.to(90);
  }
  console.log("Luz: " + luz);
  setTimeout(ondear, 1000);
}