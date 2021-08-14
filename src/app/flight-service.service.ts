import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  // url="http://localhost:8989/admin/api/v2";
  url="http://localhost:8099/api/v2";
  constructor(private httpClient:HttpClient) { }
  getAllFlights()
  {
    return this.httpClient.get(this.url+"/flights")
  }
  updateFlight(obj:any)
  {
    return this.httpClient.put(this.url+"/updateFlights",obj);
  }
  addFlight(flightObj:any)
  {
    return this.httpClient.post(this.url+"/flights",flightObj);
  }
  deleteFlight(obj:any)
  {
    return this.httpClient.delete(this.url+"/flights/"+obj);
  }
}
