import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/shipping.json');
  }
  // getShippingPrice() {
  //     return this.http.get<any>('assets/shipping.json',this.httpOptions);
  //   }
  //itmArray:{type:string,price:number}[]=[];
  // getShippingPrice() {
  //   return this.http.get<any>('assets/shipping.json');
  //   // return this.http
  //   // .get('assets/characters.json')
  //   // .pipe(map(charactersData => charactersData['data']));
  // }
}
