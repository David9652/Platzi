<?php
require_once 'Driver.php';
require_once 'Car.php';
require_once 'UberX.php';
require_once 'UberPool.php';
require_once 'PayPal.php';

$uber = new UberX("ABC123",new Driver("David Ángel","1018481424"),"Chevrolet","Spark");
$uber->passengers = 4;
$uber->printDataCar();

$uberpool = new UberPool("DEF123",new Driver("Daniel Ángel","95120709381"),"Dodge","Attitude");
$uberpool->passengers = 4;
$uberpool->printDataCar();


$paypal = new PayPal(5,"carlosdavid_9652@hotmail.com");
?>