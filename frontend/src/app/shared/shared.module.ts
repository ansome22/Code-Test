import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsGridViewComponent } from './components/products/products-grid-view/products-grid-view.component';
import { ProductsListViewComponent } from './components/products/products-list-view/products-list-view.component';
import { ToastComponent } from './components/toast/toast.component';
import { ShowCartComponent } from './components/cart/show-cart/show-cart.component';



@NgModule({
  declarations: [
    ProductsGridViewComponent,
    ProductsListViewComponent,
    ToastComponent,
    ShowCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsGridViewComponent,
    ProductsListViewComponent,
    ShowCartComponent
  ]
})
export class SharedModule { }
