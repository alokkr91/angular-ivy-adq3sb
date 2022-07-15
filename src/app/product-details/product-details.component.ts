import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { products, Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private _location: Location) {}

  ngOnInit() {
    var pramRoute = this.route.snapshot.paramMap;
    var prodId = Number(pramRoute.get('productId'));
    this.product = products.find((x) => x.id === prodId);
  }
  backClicked() {
    this._location.back();
  }
}
