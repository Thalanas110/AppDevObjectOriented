<?php
require_once 'VehicleFull.php'; 

class Bus extends Vehicle {}
class Car extends Vehicle {}

$bus = new Bus("Bus", 80, 20000);
$car = new Car("Car", 120, 50000);

echo $bus->getWheels();  // Output: 4
echo $car->getWheels();  // Output: 4
?>
