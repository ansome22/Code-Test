import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAdminGuard } from 'src/app/core/guards/is-admin.guard';
import { ListAllCartsComponent } from './list-all-carts/list-all-carts.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { isCustomerGuard } from 'src/app/core/guards/is-customer.guard';
import { ShowCartComponent } from './show/cart.component';

const routes: Routes = [
  {
    path: 'all',
    canActivate: [isAdminGuard],
    component: ListAllCartsComponent,
  },
  {
    path: 'show',
    canActivate: [isCustomerGuard],
    component: ShowCartComponent,
  },
  {
    path: 'show/:id',
    canActivate: [isAdminGuard],
    component: ShowCartComponent,
  },
  {
    path: 'checkout',
    canActivate: [isCustomerGuard],
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
