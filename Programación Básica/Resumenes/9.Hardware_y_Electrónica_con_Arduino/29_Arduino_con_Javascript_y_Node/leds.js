var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(7);
  led.blink(500);
  console.log(led);
});