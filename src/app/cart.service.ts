import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable()
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
  constructor(private http: HttpClient) {}
  //itmArray:{type:string,price:number}[]=[];
  getShippingPrice() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
