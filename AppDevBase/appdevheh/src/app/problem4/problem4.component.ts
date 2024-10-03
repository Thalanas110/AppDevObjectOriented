import { Component, OnInit } from '@angular/core';
import { PhpService } from '../php-service.service';

@Component({
  selector: 'app-problem4',
  template: `
    <div>
      <h3>Bus Seating Capacity</h3>
      <p>Seating Capacity: {{seatingCapacity?.seatingCapacity}}</p>
    </div>
  `,
})
export class Problem4Component implements OnInit 
{
  seatingCapacity: any;

  constructor(private phpService: PhpService) 
  {
    //hehehe
  }

  ngOnInit() 
  {
    this.phpService.getBusCapacity().subscribe(data => 
    {
      this.seatingCapacity = data;
    });
  }
}
