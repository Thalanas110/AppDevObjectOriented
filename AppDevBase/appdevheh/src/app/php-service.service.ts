import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhpService 
{
  private baseUrl = 'http://localhost:4200/'; // uses xampp

  constructor(private http: HttpClient) 
  {

  }

  getVehicleInfo(): Observable<any> 
  {
    return this.http.get(this.baseUrl + 'vehicleWithAttributes.php');
  }

  getBusInfo(): Observable<any> 
  {
    return this.http.get(this.baseUrl + 'busInheritsVehicle.php');
  }

  getBusCapacity(): Observable<any> 
  {
    return this.http.get(this.baseUrl + 'busWithDefaultCapacity.php');
  }

  getBusFare(): Observable<any> 
  {
    return this.http.get(this.baseUrl + 'busFareOverride.php');
  }

  getFuelType(): Observable<any> 
  {
    return this.http.get(this.baseUrl + 'sharedProperty.php');
  }
}
