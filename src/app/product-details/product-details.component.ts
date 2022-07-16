import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { products, Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  //providers: [CartService],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private cartService: CartService
  ) {}

  ngOnInit() {
    debugger;
    var pramRoute = this.route.snapshot.paramMap;
    var prodId = Number(pramRoute.get('productId'));
    this.product = products.find((x) => x.id === prodId);
  }
  addToCart(pProduct: Product) {
    this.cartService.addToCart(pProduct);
    window.alert('Your product has been added to the cart!');
  }
  backClicked() {
    this._location.back();
  }
}
