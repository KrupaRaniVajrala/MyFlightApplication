import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerachbookService } from '../serachbook.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {

    PassengerName="";
  age="";
  Mobile="";
  mealpreference="";
  flightNumber="";
  errorMessage: any;
  obj:any;
  result=[];
  name="";
 
   
  constructor(private Service:SerachbookService,private route:Router) { 

  }

  ngOnInit(): void {
    this.obj=this.Service.getBook();
    console.log(this.obj);
    this.result.push(this.obj);
  }

  continueBooking()
    {
      var bookObj=
      {
        "name":this.PassengerName,
        "age":this.age,
        "phNo":this.Mobile,
        "flightNumber":this.obj.flightNumber,
           "fromLoc":this.obj.fromLoc,
      "toLoc":this.obj.toLoc,
      "scheduleTime":this.obj.scheduleTime,
      "price":this.obj.price,
      "Meal":this.mealpreference,
      "booker":localStorage.getItem('username'),
            "date":new Date(),
      "onwardDate":new Date(),

          }
          console.log(bookObj);
      this.Service.continueBooking(bookObj)
      .subscribe((res:any)=>{
        // console.log("Booking Successful")
        alert("Booking Successful")}​​​,
      (err:any)=>{​​​
      console.log(err)
      this.errorMessage = err.message;
      }​​​)
      this.route.navigate(['manage-bookings']);
    }
}