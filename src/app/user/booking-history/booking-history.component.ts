import { Component, OnInit } from '@angular/core';
import { BookHistoryService } from '../book-history.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  result:any={};
  errorMessage=""
  constructor(private Service:BookHistoryService) { }

  ngOnInit(): void {

    this.Service.getAllBookings()
    .subscribe((res:any)=>{this.result=res;​​​console.log(res);
      alert("Successful")}​​​,
    (err:any)=>{​​​
    console.log(err)
    this.errorMessage = err.message;
    }​​​)
  }

}
