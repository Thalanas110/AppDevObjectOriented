<?php
require_once 'VehicleFull.php';

class Bus extends Vehicle 
{
    public function seating_capacity($capacity = 50) 
    {
        return "Bus seating capacity is $capacity.";
    }
}

$bus = new Bus("Bus", 80, 20000);
echo $bus->seating_capacity();
?>
