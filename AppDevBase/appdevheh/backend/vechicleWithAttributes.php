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
}

$vehicle = new Vehicle("Toyota", 120, 15000);
echo json_encode($vehicle);
?>
