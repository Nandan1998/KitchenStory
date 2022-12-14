import { Injectable } from '@angular/core';
import { CartService } from './../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public GST:number = 10;
  public deliveryCharge:number = 15;
  public total:number;

  constructor(private cartService: CartService) { }

  surchargeAmount(){
    return this.total = this.GST + this.deliveryCharge;
    console.log(this.total);
  }
}
