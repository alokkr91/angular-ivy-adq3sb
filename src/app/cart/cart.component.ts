import { Component, OnInit, Injectable } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],  
})
// export class CartComponent implements OnInit {
//   constructor(private cartService: CartService) {}
//   items = this.cartService.getItems();
//   ngOnInit() {
//     window.alert(JSON.stringify(this.cartService.getItems()));
//   }
// }
export class CartComponent implements OnInit {
  constructor(private cartService1: CartService) {
    window.alert(JSON.stringify(this.cartService1.getItems()));
  }
  items = this.cartService1.getItems();
  ngOnInit() {
    window.alert(JSON.stringify(this.cartService1.getItems()));
  }
}