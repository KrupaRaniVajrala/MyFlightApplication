import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ManageDiscountsComponent } from './manage-discounts/manage-discounts.component';
import { ManageSchedulesComponent } from './manage-schedules/manage-schedules.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:'',component:AdminHomeComponent,
    children:[
  {path:'manage-airlines',component:ManageAirlinesComponent},
  {path:'manage-schedules',component:ManageSchedulesComponent},
  {path:'manage-discounts',component:ManageDiscountsComponent},
  {path:'reports',component:ReportsComponent}
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
