import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookHistoryService {

  url="http://localhost:8082/api/v6";
  
  constructor(private httpClient:HttpClient) { }

  getAllBookings()
  {
    return this.httpClient.get(this.url+"/bookings");
  }

  deleteBooking(obj:any)
  {
    return this.httpClient.delete(this.url+"/bookings/"+obj);
  }

}
