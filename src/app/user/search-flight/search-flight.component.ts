import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerachbookService } from '../serachbook.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  from="";
  to="";
  wayType="";
  schedule="";
  errorMessage: any;
  obj=[];
  constructor(private Service:SerachbookService,private route:Router) { }
result:any={};

  ngOnInit(): void {
  }

 
  searchFlight(fromLoc:any,toLoc:any,scheduleTime:any)
  {
   
    this.Service.searchFlight(fromLoc,toLoc,scheduleTime)
      .subscribe((res:any)=>{this.result=res,
        console.log("Successful"),console.log(this.result)}​​​,
      
        (err:any)=>{​​​
      console.log(err)
      this.errorMessage = err.message;
      }​​​)
}
book(obj:any)
{
  this.Service.setBook(obj);
  this.route.navigate(['book-flight']);
}
}
