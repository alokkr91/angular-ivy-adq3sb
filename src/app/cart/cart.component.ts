import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  items = this.cartService.getItems();
  ngOnInit() {
    window.alert(JSON.stringify(this.cartService.getItems()));
  }
}
