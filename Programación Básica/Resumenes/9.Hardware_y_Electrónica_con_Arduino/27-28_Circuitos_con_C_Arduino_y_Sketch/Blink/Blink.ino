int LED = 7;
int wait = 1000;

void setup() {
  // put your setup code here, to run once:
  pinMode(LED,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(LED,HIGH);
  delay(wait);
  digitalWrite(LED,LOW);
  delay(wait/2);
}
