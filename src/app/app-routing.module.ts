import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { FormProductsComponentComponent } from './form-products-component/form-products-component.component';
import { FProductComponent } from './f-product/f-product.component';
import { DetailProductComponentComponent } from './detail-product-component/detail-product-component.component';


const routes: Routes= [
  {path: 'Home', component:ProductsComponentComponent},
  {path: 'addProduct', component:FormProductsComponentComponent},
  {path: 'Home/:id', component: DetailProductComponentComponent},
  {path: '**', component:FProductComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
