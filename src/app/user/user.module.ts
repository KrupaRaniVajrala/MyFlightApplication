import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { ContinuebookingComponent } from './continuebooking/continuebooking.component';

@NgModule({
  declarations: [UserHomeComponent, 
    SearchFlightComponent, 
     BookFlightComponent, 
    ManageBookingsComponent, BookingHistoryComponent, ContinuebookingComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule

  ]
})
export class UserModule { }
