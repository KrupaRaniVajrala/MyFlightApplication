import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.scss']
})
export class ManageAirlinesComponent implements OnInit {
  airlinename="";
  // logo="";
  contact="";
  address="";
  result:any={};
  errorMessage=""
  constructor(private ServiceService:ServiceService) { }

  ngOnInit(): void {
    
    this.ServiceService.getAllAirlines()
.subscribe((res:any)=>{this.result=res;​​​console.log(res);
  console.log("Successful")}​​​,
(err:any)=>{​​​
console.log(err)
this.errorMessage = err.message;
}​​​)
  }

addAirline()
    {
      var airlineObj=
      {
        "name": this.airlinename,
        "contactNumber": this.contact,
        "address": this.address
      }
      this.ServiceService.addAirline(airlineObj)
      .subscribe((res:any)=>{
        alert("Added Successful")}​​​,
      (err:any)=>{​​​
      console.log(err)
      this.errorMessage = err.message;
      }​​​)
    }
  deleteAirline(obj:any)
  {
    this.ServiceService.deleteAirline(obj)
      .subscribe((res:any)=>{
        alert(" Deleted Successful")}​​​,
      (err:any)=>{​​​
      console.log(err)
      this.errorMessage = err.message;
      }​​​)
  }
}

