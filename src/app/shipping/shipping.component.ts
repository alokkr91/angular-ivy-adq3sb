import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}
  shippingCosts!: Observable<any>;
  ngOnInit() {
    // this.shippingCosts = this.cartService.getShippingPrice();
    // alert(JSON.stringify(this.shippingCosts));
  }
}
