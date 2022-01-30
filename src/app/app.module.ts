import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { FormProductsComponentComponent } from './form-products-component/form-products-component.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FProductComponent } from './f-product/f-product.component';
import { DetailProductComponentComponent } from './detail-product-component/detail-product-component.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponentComponent,
    FormProductsComponentComponent,
    FProductComponent,
    DetailProductComponentComponent,
    TodoListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
