import { Component, OnInit } from '@angular/core';
import { BookHistoryService } from '../book-history.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})
export class ManageBookingsComponent implements OnInit {
  
   errorMessage=""
  result:any={};
    constructor(private Service:BookHistoryService) { }

  ngOnInit(): void {
         this.loadAllbooking()
     }
     loadAllbooking()
     {
      this.Service.getAllBookings()
      .subscribe((res:any)=>{this.result=res;​​​console.log(res);
      console.log("Successful")}​​​,
      (err:any)=>{​​​
       console.log(err)
       this.errorMessage = err.message;
  }​​​)
     }
    deleteBooking(obj:any)
     {
       this.Service.deleteBooking(obj)
      .subscribe((res:any)=>{console.log(res);
        alert("Booking cancelled");
        this.loadAllbooking()
      }​​​,
      (err:any)=>{​​​
      console.log(err)
      this.errorMessage = err.message;
      }​​​)
    }
  }

  


