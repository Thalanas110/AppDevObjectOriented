import { Component, OnInit } from '@angular/core';
import { PhpService } from '../php-service.service';

@Component({
  selector: 'app-problem6',
  template: `
    <div>
      <h3>Bus Fare Calculation</h3>
      <p>Total Fare: {{busFare?.fare}}</p>
    </div>
  `,
})
export class Problem6Component implements OnInit 
{
  busFare: any;

  constructor(private phpService: PhpService) 
  {

  }

  ngOnInit() 
  {
    this.phpService.getBusFare().subscribe(data => 
    {
      this.busFare = data;
    });
  }
}
