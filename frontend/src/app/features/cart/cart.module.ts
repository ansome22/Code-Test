import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListAllCartsComponent } from './list-all-carts/list-all-carts.component';
import { ShowCartComponent } from './show/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CheckoutComponent, ListAllCartsComponent, ShowCartComponent],
  imports: [CommonModule, SharedModule, CartRoutingModule],
})
export class CartModule {}
