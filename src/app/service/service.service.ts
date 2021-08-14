import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
// url="http://localhost:8989/admin/api/v1";

  url="http://localhost:8099/api/v1";
  constructor(private httpClient:HttpClient) { }
  getAllAirlines()
  {
    return this.httpClient.get(this.url+"/airlines");
  }
  addAirline(airlineObj:any)
  {
    return this.httpClient.post(this.url+"/airlines",airlineObj);
  }
  updateFlight(flightObj:any)
  {
    return this.httpClient.put(this.url+"/updateFlights",flightObj);
  }
  deleteAirline(obj:any)
  {
    return this.httpClient.delete(this.url+"/airlines/"+obj);
  }
}
