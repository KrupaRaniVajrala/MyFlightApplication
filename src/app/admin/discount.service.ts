import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  
  // url="http://localhost:8989/api/admin/api/v4";
  
  url="http://localhost:8099/api/v4";
  constructor(private httpClient:HttpClient) {}
    findAllDiscounts()
    {
      return this.httpClient.get(this.url+"/discounts")
    }
    addDiscount(discObj:any)
  {
    console.log(JSON.stringify(discObj));
    return this.httpClient.post(this.url+"/discounts",discObj);
  }
  deleteDiscount(obj:any)
  {
    return this.httpClient.delete(this.url+"/discounts/"+obj);
  }

   
}
