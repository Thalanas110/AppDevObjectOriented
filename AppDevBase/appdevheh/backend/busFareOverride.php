<?php
require_once 'vehicleWithAttributes.php';

class Bus extends Vehicle 
{
    private $capacity = 50;

    public function fare() 
    {
        $totalFare = $this->capacity * 100;
        $maintenanceCharge = $totalFare * 0.10;
        return $totalFare + $maintenanceCharge;
    }
}

$bus = new Bus("Scania", 90, 30000);
echo json_encode(['fare' => $bus->fare()]);
?>
