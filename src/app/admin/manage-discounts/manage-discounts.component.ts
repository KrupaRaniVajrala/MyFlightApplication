import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../discount.service';

@Component({
  selector: 'app-manage-discounts',
  templateUrl: './manage-discounts.component.html',
  styleUrls: ['./manage-discounts.component.scss']
})

export class ManageDiscountsComponent implements OnInit {
  code="";
  percentage="";

  result:any=[];
  errorMessage=""
  constructor(private Service:DiscountService) { }

  ngOnInit(): void {
    this.Service.findAllDiscounts()
.subscribe((res:any)=>{this.result=res;​​​console.log(res);
  console.log("Successful")}​​​,
(err:any)=>{​​​
console.log(err)
this.errorMessage = err.message;
  })
}
addDiscount()
    {
      var discObj=
      {
        "code": this.code,
        "percentage": this.percentage,
       
      }
      this.Service.addDiscount(discObj)
      .subscribe((res:any)=>{
        alert("Added Successfully")}​​​,
      (err:any)=>{​​​
      console.log(err)
      this.errorMessage = err.message;
      }​​​)
    }
  deleteDiscount(obj:any)
  {
    this.Service.deleteDiscount(obj)
      .subscribe((res:any)=>{
        alert("Deleted Successfully")}​​​,
      (err:any)=>{​​​
      console.log(err)
      this.errorMessage = err.message;
      }​​​)
  }
}