import { Component, OnInit } from '@angular/core';
import { PhpService } from '../php-service.service';

@Component({
  selector: 'app-problem5',
  template: `
    <div>
      <h3>Shared Property (Fuel Type)</h3>
      <p>Fuel Type: {{fuelType?.fuelType}}</p>
    </div>
  `,
})
export class Problem5Component implements OnInit 
{
  fuelType: any;

  constructor(private phpService: PhpService) 
  {

  }

  ngOnInit() 
  {
    this.phpService.getFuelType().subscribe(data => 
    {
      this.fuelType = data;
    });
  }
}
