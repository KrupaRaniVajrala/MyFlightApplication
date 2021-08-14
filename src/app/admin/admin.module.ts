import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ManageDiscountsComponent } from './manage-discounts/manage-discounts.component';
import { ManageSchedulesComponent } from './manage-schedules/manage-schedules.component';
import { ReportsComponent } from './reports/reports.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageFlightsComponent } from './manage-flights/manage-flights.component';

@NgModule({
  declarations: [AdminHomeComponent, ManageAirlinesComponent, ManageDiscountsComponent, ManageSchedulesComponent, ReportsComponent, ManageFlightsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
