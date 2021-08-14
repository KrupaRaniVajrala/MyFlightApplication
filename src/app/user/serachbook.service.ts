import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerachbookService {
  
  constructor(private httpClient:HttpClient) { }

  url="http://localhost:8099/api/v2/flights";

 url1="http://localhost:8082/api/v6";

    //  url2="http://localhost:8099/api/v5";
  searchFlight(from:String,to:String,schedule:String)
  {
      return this.httpClient.get(this.url+"/search?fromLoc="+from+"&toLoc="+to+"&scheduleTime="+schedule);
  }
 
 arrVal:any;
  getBook()
  {
      return this.arrVal; 
  }
  setBook(obj:any)
  {
      this.arrVal=obj;
  }

//  continueBooking(passObj:any)
//   {
//     return this.httpClient.post(this.url2+"/passengers",passObj);
//     //return this.http
//  }
  continueBooking(passObj:any)
  {
    return this.httpClient.post(this.url1+"/bookings",passObj);
    //return this.http
  }


}
