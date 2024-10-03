<?php
class Vehicle 
{
    public $name;
    public $speed;
    public $mileage;

    public function __construct($name, $speed, $mileage) 
    {
        $this->name = $name;
        $this->speed = $speed;
        $this->mileage = $mileage;
    }

    public function displayInfo() 
    {
        return "Vehicle is $this->name, with speed $this->speed, and a total mileage of $this->mileage kilometers.";
    }
}

$vehicle = new Vehicle("Car", 120, 50000);
echo $vehicle->displayInfo();
?>
