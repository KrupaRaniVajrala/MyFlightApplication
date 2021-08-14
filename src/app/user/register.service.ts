import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url="http://localhost:8082/api/v3";

  constructor(private httpClient:HttpClient) { }
  
  register(userObj:any)
  {
    return this.httpClient.post(this.url+"/users",userObj);
  }
}
