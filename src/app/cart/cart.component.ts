import { Component, OnInit, Injectable } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService1: CartService) {}
  items = this.cartService1.getItems();
  ngOnInit() {}
}
