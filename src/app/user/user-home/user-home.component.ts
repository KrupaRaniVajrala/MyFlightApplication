import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private router:Router) { }
  bookFlight()
  {
    this.router.navigate(['/book-flight'])
  }
  searchFlight()
  {
    this.router.navigate(['/search-flight'])
  }
  manageBookings()
  {
    this.router.navigate(['/manage-bookings'])
  }
  bookHistory()
  {
    this.router.navigate(['/booking-history'])
  }
  logout()
  {
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
