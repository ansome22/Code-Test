import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AdminDashboardComponent } from './admin/pages/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer/pages/customer-dashboard/customer-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CustomerDashboardComponent,
    DashboardComponent
  ],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
