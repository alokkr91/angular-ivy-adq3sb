import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    var pramRoute = this.route.snapshot.paramMap;
    var prodId = Number(pramRoute.get('productId'));
    var price = Number(pramRoute.get('price'));
    this.product = products.find((x) => x.id === prodId);
  }
}
