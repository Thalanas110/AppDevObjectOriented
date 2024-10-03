<?php
require_once 'VehicleFull.php';  

class Bus extends Vehicle 
{
    public function fare($seating_capacity = 50) 
    {
        $total_fare = parent::fare($seating_capacity);
        return $total_fare + ($total_fare * 0.1);
    }
}

$bus = new Bus("Bus", 80, 20000);
echo "Total fare: " . $bus->fare();
?>
