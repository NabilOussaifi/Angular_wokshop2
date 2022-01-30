import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Module';

@Component({
  selector: 'app-detail-product-component',
  templateUrl: './detail-product-component.component.html',
  styleUrls: ['./detail-product-component.component.css']
})
export class DetailProductComponentComponent implements OnInit {
id: number;
ListProduct:Product[];
  constructor(private route: ActivatedRoute) {
   }
  ngOnInit(): void {
  console.log(this.route.snapshot.params.id);
  this.id=this.route.snapshot.params.id;
  }

}
