import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductsComponent } from './pages/edit-products/edit-products.component';
import { isAdminGuard } from 'src/app/core/guards/is-admin.guard';
import { ShowProductsComponent } from './pages/show/products.component';
import { loggedInGuard } from 'src/app/core/guards/logged-in.guard';
import { ListProductsComponent } from './pages/list-products/list-products.component';

const routes: Routes = [
  {
    path: 'edit/:id',
    canActivate: [isAdminGuard],
    component: EditProductsComponent,
  },
  {
    path: 'show/:id',
    canActivate: [loggedInGuard],
    component: ShowProductsComponent,
  },
  {
    path: 'list',
    canActivate: [loggedInGuard],
    component: ListProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
