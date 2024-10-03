import { Component, OnInit } from '@angular/core';
import { PhpService } from '../php-service.service';

@Component ({
  selector: 'app-problem3',
  template: `
    <div>
      <h3>Bus Information (Inherits Vehicle)</h3>
      <p>Name: {{busInfo?.name}}</p>
      <p>Speed: {{busInfo?.speed}} km/h</p>
      <p>Mileage: {{busInfo?.mileage}} km</p>
    </div>
  `,
})
export class Problem3Component implements OnInit 
{
  busInfo: any;

  constructor(private phpService: PhpService) 
  {
    
  }

  ngOnInit() 
  {
    this.phpService.getBusInfo().subscribe(data => 
    {
      this.busInfo = data;
    });
  }
}
