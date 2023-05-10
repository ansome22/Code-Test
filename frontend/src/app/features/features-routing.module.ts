import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { loggedInGuard } from '../core/guards/logged-in.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => CartModule,
  },
  {
    path: 'products',
    loadChildren: () => ProductsModule,
  },
  {
    path: 'dashboard',
    canActivate: [loggedInGuard],
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
