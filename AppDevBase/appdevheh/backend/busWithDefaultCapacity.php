<?php
require_once 'vehicleWithAttributes.php';

class Bus extends Vehicle 
{
    private $capacity = 50;

    public function seating_capacity() 
    {
        return $this->capacity;
    }
}

$bus = new Bus("Volvo", 80, 20000);
echo json_encode(['seatingCapacity' => $bus->seating_capacity()]);
?>
