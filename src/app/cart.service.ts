import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
// {
// providedIn: 'root'}
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearToCart() {
    this.items = [];
    return this.items;
  }
}
