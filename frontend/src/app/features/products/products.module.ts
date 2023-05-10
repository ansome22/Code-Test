import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { EditProductsComponent } from './pages/edit-products/edit-products.component';
import { ShowProductsComponent } from './pages/show/products.component';


@NgModule({
  declarations: [
    ListProductsComponent,
    EditProductsComponent,
    ShowProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
