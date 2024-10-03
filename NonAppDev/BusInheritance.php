<?php
require_once 'VehicleFull.php'; // calls VehicleFull file

class Bus extends Vehicle 
{
    public function displayInfo() 
    {
        return "Bus: $this->name, Speed: $this->speed, Mileage: $this->mileage";
    }
}

$bus = new Bus("Bus", 80, 20000);
echo $bus->displayInfo();
?>
