import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from 'src/app/flight-service.service';

@Component({
  selector: 'app-manage-schedules',
  templateUrl: './manage-schedules.component.html',
  styleUrls: ['./manage-schedules.component.scss']
})
export class ManageSchedulesComponent implements OnInit {

  
      FlightNumber="";
      logo="";
       fromLoc="";
       toLoc="";
        scheduleTime="";
        model="";
        price="";
  result:any={};
  errorMessage=""
  postId: any;

  constructor(private Service:FlightServiceService) { }

  ngOnInit(): void {
    
    this.Service.getAllFlights().subscribe((res:any)=>{this.result=res;​​​console.log(res);
  console.log("Successful")}​​​,
(err:any)=>{​​​
console.log(err)
this.errorMessage = err.message;
      }​​​)

  }
  updateFlight(flightObj)
  {
    console.log(flightObj)
    this.Service.updateFlight(flightObj)
      .subscribe((res:any)=>​​​console.log(res));
  } 
    addFlight()
    {
      var flightObj=
      {
        "flightNumber":this.FlightNumber,
	      "logo":this.logo,
        "fromLoc":this.fromLoc,
        "toLoc":this.toLoc,
      	"scheduleTime":this.scheduleTime,
      	"model":this.model,
	      "price":this.price
      }
      this.Service.addFlight(flightObj)
      .subscribe((res:any)=>{
        alert("Added Successfully")}​​​,
      (err:any)=>{​​​
      console.log(err)
      this.errorMessage = err.message;
      }​​​)
    }
    deleteFlight(obj:any)
  {
    this.Service.deleteFlight(obj)
      .subscribe((res:any)=>{
        alert("Deleted Successful")}​​​,
      (err:any)=>{​​​
      console.log(err)
      this.errorMessage = err.message;
      }​​​)
  }
}


