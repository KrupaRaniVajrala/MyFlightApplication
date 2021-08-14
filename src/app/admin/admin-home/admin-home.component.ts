import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router:Router) { }

  manageAirline()
  {
    this.router.navigate(['./manage-airlines'])
  }

  manageSchedules()
  {
    this.router.navigate(['./manage-schedules'])
  }
  
  manageDiscounts()
  {
    this.router.navigate(['./manage-discounts'])
  }

  reports()
  {
    this.router.navigate(['./reports'])
  }
  logout()
  {
    this.router.navigate(['./login'])
  }
  ngOnInit(): void {
  }

}
