import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path:'',component:UserHomeComponent,
    children:[
  {path:'book-flight',component:BookFlightComponent},
  {path:'booking-history',component:BookingHistoryComponent},
  {path:'manage-bookings',component:ManageBookingsComponent},
  {path:'search-flight',component:SearchFlightComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
