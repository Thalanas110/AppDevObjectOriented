<?php
class Vehicle 
{
    const FUEL_TYPE = "Diesel";
}

class Car extends Vehicle 
{
//get
}
class Bus extends Vehicle 
{
//get
}

$sharedFuelType = ['fuelType' => Vehicle::FUEL_TYPE];
echo json_encode($sharedFuelType);
?>
