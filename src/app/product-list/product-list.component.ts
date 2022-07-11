import { Component } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  porductss = products;

  share() {
    window.alert(JSON.stringify(this.porductss));
  }
}
