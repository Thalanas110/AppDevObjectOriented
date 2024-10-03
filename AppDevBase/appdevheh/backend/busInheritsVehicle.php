<?php
require_once 'vehicleWithAttributes.php';

class Bus extends Vehicle 
{
    public function __construct($name, $speed, $mileage) 
    {
        parent::__construct($name, $speed, $mileage);
    }
}

$bus = new Bus("Mercedes", 100, 25000);
echo json_encode($bus);
?>
