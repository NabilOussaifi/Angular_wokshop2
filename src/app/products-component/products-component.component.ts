import { Component, OnInit } from '@angular/core';
import { Product } from '../Module';
import { CalculService } from '../service/calcul.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {
ListProduct: Product[];
k: number;
  constructor(private serviceCal:CalculService) { }

  ngOnInit(): void {
    this.ListProduct = [
      {id:1,title:"T-shirt1", price:45, quantity:80, like:0},
      {id:2,title:"T-shirt2", price:10, quantity:20, like:0},
      {id:3,title:"T-shirt3", price:20, quantity:40, like:0},
      {id:4,title:"T-shirt4", price:8, quantity:12, like:0}
    ]
  }
  caltitle() {
    this.k= this.serviceCal.getNumberOf(this.ListProduct,"title","T-shirt1");
  }
}
