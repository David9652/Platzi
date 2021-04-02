<?php
require_once 'Driver.php';
class Car {
    public $id = integer;
    public $license = string;
    public $driver = Driver;
    public $passengers = integer;

    function __construct($license,$driver){
        $this->license = $license;
        $this->driver = $driver;
    }
    function printDataCar(){
        echo "License: " .$this->license . " Driver: " .$this->driver->name . " Passenger: " .$this->passengers . "<br>";
    } 
}
?>