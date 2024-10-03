import { Component, OnInit } from '@angular/core';
import { PhpService } from '../php-service.service';

@Component({
  selector: 'app-problem1',
  template: `
    <div>
      <h3>Vehicle Information</h3>
      <p>Name: {{vehicleInfo?.name}}</p>
      <p>Speed: {{vehicleInfo?.speed}} km/h</p>
      <p>Mileage: {{vehicleInfo?.mileage}} km</p>
    </div>
  `,
})
export class Problem1Component implements OnInit 
{
  vehicleInfo: any;

  constructor(private phpService: PhpService) 
  {
    // hehehe get in get in
  }

  ngOnInit() 
  {
    this.phpService.getVehicleInfo().subscribe(data => 
    {
      this.vehicleInfo = data;
    });
  }
}
