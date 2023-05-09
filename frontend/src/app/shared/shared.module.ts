import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsGridViewComponent } from './components/products/products-grid-view/products-grid-view.component';
import { ProductsListViewComponent } from './components/products/products-list-view/products-list-view.component';



@NgModule({
  declarations: [
    ProductsGridViewComponent,
    ProductsListViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsGridViewComponent,
    ProductsListViewComponent
  ]
})
export class SharedModule { }
